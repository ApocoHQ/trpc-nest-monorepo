export interface INumberGeneratorFeature {
  getRandomNumber: (props: { min: number; max: number }) => number;
}

export interface Context {
  numberGenerator: INumberGeneratorFeature;
}
