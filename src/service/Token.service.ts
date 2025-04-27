import { Response } from 'express'
import { JWTPayload } from 'jose'
import * as jwt from 'jsonwebtoken'
import { PrismaService } from 'src/prisma/prisma.service'

export class TokenService {
	payload: JWTPayload
	constructor(payload: JWTPayload) {
		this.payload = payload
	}

	generate() {
		const accessToken = jwt.sign(this.payload, process.env.SECRET_ACCESS_kEY, {
			expiresIn: '30m'
		})
		const refreshToken = jwt.sign(this.payload, process.env.SECRET_REFRESH_kEY, {
			expiresIn: '60d'
		})
		return {accessToken, refreshToken}
	}

	generateOnlyAccess() {
		const accessToken = jwt.sign(this.payload, process.env.SECRET_ACCESS_kEY, {
			expiresIn: '30m'
		})

		return accessToken
	}

	async saveToDB(id: number, token: string, prisma: PrismaService) {
		return await prisma.user.update({
			where: {
				id: id
			},
			data: {
				RefReshToken: token
			}
		})
	}

	saveInCookie(res: Response, token: string) {
		return res.cookie('refresh-token', token, {
			maxAge: 60 * 24 * 60 * 60 * 1000,
			httpOnly: true
		})
	}
}