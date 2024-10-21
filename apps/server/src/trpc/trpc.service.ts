import * as trpcExpress from '@trpc/server/adapters/express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Injectable } from '@nestjs/common';

import { router } from '@shared/api';

@Injectable()
export class TrpcService {
  applyMiddleware(app: NestExpressApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router,
        createContext: () => {
          return {
            getRandomNumber: (props) => {
              return (
                Math.floor(Math.random() * (props.max - props.min + 1)) +
                props.min
              );
            },
          };
        },
      }),
    );
  }
}
