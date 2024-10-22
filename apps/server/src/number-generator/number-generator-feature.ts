import { Injectable } from '@nestjs/common';
import { INumberGeneratorFeature } from '@shared/api';

@Injectable()
export class NumberGeneratorFeature implements INumberGeneratorFeature {
  getRandomNumber(props: { min: number; max: number }) {
    return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  }
}
