import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { TokenService } from 'src/service/Token.service';
import { LogInDTO, RegDTO } from 'src/dto/user.dto';

@Injectable()
export class AuthenticationService {
	constructor(private readonly prisma: PrismaService) {}

	/*                                        Регестрация                                                     */
  async Regestration(data: RegDTO, res: Response) {
		console.log(data)
		const findByEmail = await this.prisma.user.findUnique({where: {email: data.email}})
		const findByUName = await this.prisma.user.findUnique({where: {userName: data.userName}})
		if (findByEmail) 
			throw new ConflictException({err: "Такой Email уже занят"});
		else if (findByUName) 
			throw new ConflictException({err:"Такой UserName уже занят"}); 

		{/*                                  Рвбота с данными                                           */}
		const user = await this.prisma.user.create({
			data: {
				email: data.email,
				userName:"@" + data.userName,
				name: data.name,
				password: bcrypt.hashSync(data.password, 7)
			}
		})

		return res.json({isActivate: false, data: user})
	}



	/*                                        Вход                                                     */

	async LogIn(data: LogInDTO, res: Response) {
		const validateUser = await this.prisma.user.findUnique({
			where: {
				email: data.email,
			}
		})

		if (!validateUser) 
			throw new UnauthorizedException({err: "Неправельный email"});
		else if (!bcrypt.compareSync(data.password, validateUser.password)) 
			throw new UnauthorizedException({err: "Неправельный пароль"});
		else if (!validateUser.isActivated)
			throw new UnauthorizedException({err: "Неактивирована почта", isActivate: false})

		{/*                                      Генерация токенов                                               */}
		const tokenService = new TokenService({id: validateUser.id, isActivated: validateUser.isActivated})
		const tokens = tokenService.generate()
		await tokenService.saveToDB(validateUser.id, tokens.refreshToken, this.prisma)
		tokenService.saveInCookie(res, tokens.refreshToken)
		return tokens
	}


	/*                                           Новый Access Token                                              */

	async NewAccess(token: string) {
		type JWTPayload = {
			id: number,
			isActivated: boolean
		}
		const result = jwt.verify(token, process.env.SECRET_REFRESH_kEY) as JWTPayload
		const findUser = await this.prisma.user.findUnique({
			where: {id: result.id}
		})


		const tokenService = new TokenService({id: findUser.id, isActivated: findUser.isActivated})
		const newAccessToken = tokenService.generateOnlyAccess()
		return newAccessToken
	}

}
