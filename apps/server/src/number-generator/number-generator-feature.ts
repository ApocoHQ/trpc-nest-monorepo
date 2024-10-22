import { Injectable } from '@nestjs/common';
import { INumberGeneratorFeature, Session } from '@shared/api';

@Injectable()
export class NumberGeneratorFeature implements INumberGeneratorFeature {
  getRandomNumber(session: Session, props: { min: number; max: number }) {
    console.log(`Request from user ${session.userId}`);

    return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  }
}
