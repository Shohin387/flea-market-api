import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendMail } from 'src/service/Mail.service';
import { TokenService } from 'src/service/Token.service';

@Injectable()
export class ActivateAcountService {
  constructor(private readonly prisma: PrismaService) {
  }

  async UpdateActivate(userEmail: string, userAnsver: string, res: Response) {
    console.log(userEmail)
    const {keyForVerification} = await this.prisma.activatedAcount.findUnique({
      where: {
        userEmail: userEmail
      },
      select: {keyForVerification: true}, 
    })
    if (keyForVerification != +userAnsver) throw new UnauthorizedException("Неверный код");
    

    const user = await this.prisma.user.update({
      where: {email: userEmail},
      data: {isActivated: true},
      select: {
        id: true,
        isActivated: true
      }
    })
 
    const tokenService = new TokenService({id: user.id, isActivated: user.isActivated})
    const tokens = tokenService.generate()
    await tokenService.saveToDB(user.id, tokens.refreshToken, this.prisma)
    tokenService.saveInCookie(res, tokens.refreshToken)
    return {...tokens}
  }

  async Generation(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {email: email}
    })

    if (!user) throw new UnauthorizedException({err: 'Такой Email Не зарегестрирован'})
    const result = await new SendMail(user.email).send()
    await this.prisma.activatedAcount.upsert({
      where: {userEmail: email},
      update: {keyForVerification: result},
      create: {
        userEmail: email,
        keyForVerification: result,
      }
    })
  }
}
