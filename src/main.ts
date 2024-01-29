import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS
  app.enableCors({
    origin: 'https://madariagasec.firebaseapp.com',
    // origin: 'http://localhost:8080',
     // Reemplaza con el origen de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
 
  const PORT = process.env.PORT ?? 3000

  await app.listen(PORT);
}

bootstrap();
