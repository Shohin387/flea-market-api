import { 
	CanActivate,
	Injectable,
	ExecutionContext
} from "@nestjs/common";
import * as jwt from "jsonwebtoken"


@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest()
		const token = req.headers.authorization

		try {
			const payload = jwt.verify(token, process.env.SECRET_REFRESH_kEY)
			console.log(payload)
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
}