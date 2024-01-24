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
      // host: 'bjeea2lcgcdmneaujsib-mysql.services.clever-cloud.com',  // SECRETARIA DB
      host: 'bct3k8v4ehk7fh77hma9-mysql.services.clever-cloud.com', // PRUEBA DB
      port: 3306,
      // username: 'uxejyhsch46jhsem',
      username: 'ualk8hbjhiacgall',
      // password: '2maesP71TZv3rr2KcJrc',
      password: '7K2Hpj3YyVI0VaHoUKCm',
      // database: 'bjeea2lcgcdmneaujsib',
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
