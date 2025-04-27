import {  Controller, Get, Put, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('get-all')
  getAllUsers(){
    
    return this.userService.getAllUsers();
  }
  

  @Put('update')
  updateBuscet(@Query('id') id: number) {
    return this.userService.updateBuscet(+id)
  }
}


