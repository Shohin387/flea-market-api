import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Response } from 'express';
import { TryCatch } from 'src/decorators/ErrorHandler';
import { LogInDTO, RegDTO } from 'src/dto/user.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('reg')
  @TryCatch()
  async reg(@Body() data: RegDTO, @Res() res: Response) {
    console.log(data)
    return this.authenticationService.Regestration(data, res)
		 
  }  

  @Post("log-in")
  @TryCatch()
  async LogIn(@Body() data: LogInDTO, @Res() res: Response){
    const result = await this.authenticationService.LogIn(data, res)
		return res.json(result)
  }

  @Post("new-access-token")
  @TryCatch()
  NewAccess(@Body() data: {refReshToken: string}) {
    return this.authenticationService.NewAccess(data.refReshToken)
  }
}
