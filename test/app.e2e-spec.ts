import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import configureApp from '../src/configure-app';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    configureApp(app);

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/v1/greeting (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/greeting')
      .expect(200)
      .expect('Hi from v1');
  });

  it('/v1/greeting/Name (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/greeting/Name')
      .expect(200)
      .expect('Hi Name');
  });

  it('/v1/greetiing/bye (DELETE)', () => {
    return request(app.getHttpServer()).delete('/v1/greeting/bye').expect(404);
  });

  it('/v2/greeting (GET)', () => {
    return request(app.getHttpServer())
      .get('/v2/greeting')
      .expect(200)
      .expect('Hi from v2');
  });

  it('/v2/greeting/Name (GET)', () => {
    return request(app.getHttpServer())
      .get('/v2/greeting/Name')
      .expect(200)
      .expect('Hi Name');
  });

  it('/v2/greetiing/bye (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/v2/greeting/bye')
      .expect(200)
      .expect('Bye from v2');
  });
});
