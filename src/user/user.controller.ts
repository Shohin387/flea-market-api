import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { userDataI, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('get-all')
  getAllUsers(){
    return this.userService.getAllUsers();
  }
  
  @Post("create")
  createUser(@Body('data') data: userDataI[]) {
    console.log(...data)
    return this.userService.createUser(data)
  }

  @Put('update')
  updateBuscet(@Query('id') id: number) {
    return this.userService.updateBuscet(+id)
  }
}


