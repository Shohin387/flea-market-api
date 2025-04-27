import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
	constructor (private prisma: PrismaService) {}


	getAllUsers() {
		console.log('service')
		return this.prisma.user.findMany()
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
