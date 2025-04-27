import { Module } from '@nestjs/common';
import { ActivateAcountService } from './activate-acount.service';
import { ActivateAcountController } from './activate-acount.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ActivateAcountController],
  providers: [ActivateAcountService],
})
export class ActivateAcountModule {}
