import { Module } from '@nestjs/common';

import { TrpcService } from './trpc.service';
import { NumberGeneratorModule } from '../number-generator/number-generator.module';

@Module({
  imports: [NumberGeneratorModule],
  providers: [TrpcService],
  exports: [TrpcService],
})
export class TrpcModule {}
