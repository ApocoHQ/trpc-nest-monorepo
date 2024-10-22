export interface Session {
  userId: string;
}

export interface INumberGeneratorFeature {
  getRandomNumber: (
    session: Session,
    props: { min: number; max: number }
  ) => number;
}

export interface Context {
  session: Session | null;
  numberGenerator: INumberGeneratorFeature;
}
