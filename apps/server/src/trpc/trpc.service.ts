import * as trpcExpress from '@trpc/server/adapters/express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Injectable } from '@nestjs/common';

import { router } from '@shared/api';
import { NumberGeneratorFeature } from '../number-generator/number-generator-feature';

@Injectable()
export class TrpcService {
  constructor(
    private readonly numberGeneratorFeature: NumberGeneratorFeature,
  ) {}

  applyMiddleware(app: NestExpressApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router,
        createContext: ({ req }) => {
          const getSession = () => {
            if (req.headers.authorization === 'Bearer Foobar') {
              return { userId: 'Testing User' };
            } else {
              return null;
            }
          };

          return {
            session: getSession(),
            numberGenerator: this.numberGeneratorFeature,
          };
        },
      }),
    );
  }
}
