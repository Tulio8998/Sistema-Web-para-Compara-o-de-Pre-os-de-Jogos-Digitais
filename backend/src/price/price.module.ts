import { Module } from '@nestjs/common';
import { PriceService } from '../price/price.service';
import { PriceController } from './price.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
