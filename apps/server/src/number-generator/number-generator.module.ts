import { Module } from '@nestjs/common';
import { NumberGeneratorFeature } from './number-generator-feature';

@Module({
  imports: [],
  providers: [NumberGeneratorFeature],
  exports: [NumberGeneratorFeature],
})
export class NumberGeneratorModule {}
