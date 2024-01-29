import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DatosModule } from './datos/datos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',

      // BASE DE DATOS ONLINE 
      // host: 'bjeea2lcgcdmneaujsib-mysql.services.clever-cloud.com',
      // username: 'uxejyhsch46jhsem',
      // password: '2maesP71TZv3rr2KcJrc',
      // database: 'bjeea2lcgcdmneaujsib',


      // BASE DE DATOS LOCAL 
      host: 'bct3k8v4ehk7fh77hma9-mysql.services.clever-cloud.com', // PRUEBA DB
      port: 3306,
      username: 'ualk8hbjhiacgall',
      password: '7K2Hpj3YyVI0VaHoUKCm',
      database: 'bct3k8v4ehk7fh77hma9',


      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DatosModule,
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
