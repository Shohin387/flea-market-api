import { userDataI } from "src/interfaces/user"
import { PrismaService } from "src/prisma/prisma.service"

export class IsThereInBD {
	private prisma: PrismaService
	private data: Partial<userDataI>
	constructor(data: Partial<userDataI>, prisma: PrismaService) {
		this.data = data
		this.prisma = prisma
	}

	search(where: 'email' | 'userName') {
	}
}