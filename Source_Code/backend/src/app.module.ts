import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { DevicesModule } from './devices/devices.module';
import { DeviceTypesModule } from './device-types/device-types.module';

@Module({
  imports: [UsersModule, RolesModule, DevicesModule, DeviceTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
