import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface userDataI {

	name: string
	userName: string,
	profilePhoto?: string,
	email: string,
	password: string,
	dateRegestration: string
}

@Injectable()
export class UserService {
	constructor (private prisma: PrismaService) {}

	getAllUsers() {
		return this.prisma.user.findMany()
	}
	

	createUser(data: userDataI[]) {
		return this.prisma.user.createMany({
			data
		})
	}

	updateBuscet(id: number) {
		return this.prisma.user.update({
			where: {
				id: id
			},
			data: {
				myByscet: [0]
			}
		})
	}

}
