export interface Context {
  getRandomNumber: (props: { min: number; max: number }) => number;
}
