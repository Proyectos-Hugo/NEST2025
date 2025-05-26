import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  //configuración swagger
  const config = new DocumentBuilder()
    .setTitle('API de de paises')
    .setDescription('Documentación del API de paises')
    .setVersion('1.0')
    .addTag('paises')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ayuda/api', app, document);
}
bootstrap();

