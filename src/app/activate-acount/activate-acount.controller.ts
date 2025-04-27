import { Controller, Post, Body, Res } from '@nestjs/common';
import { ActivateAcountService } from './activate-acount.service';
import { TryCatch } from 'src/decorators/ErrorHandler';
import { Response } from 'express';

@Controller('activate-account')
export class ActivateAcountController {
  constructor(private readonly activateAcountService: ActivateAcountService) {}

  @Post("active")
  @TryCatch()
  async UpdateActivate(@Body() data: {userAnsver: string, email: string}, @Res() res: Response) {
    console.log(data.userAnsver)
    const result = await this.activateAcountService.UpdateActivate(data.email, data.userAnsver, res)
    return res.json(result)
  }


  @Post("generate-key")
  @TryCatch()
  async genarateKey(@Body() body) {
    const {email} = body
    await this.activateAcountService.Generation(email)
  }
}
