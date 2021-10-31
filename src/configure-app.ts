import { INestApplication } from '@nestjs/common';

export default (app: INestApplication) => {
  // enable /vx/ for all paths
  app.enableVersioning();

  return app;
};
