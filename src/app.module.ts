import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ContactsModule } from './contacts/contacts.module';
import { CategoriesModule } from './categories/categories.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubCategoriesModule } from './sub-categories/sub-categories.module';
import { TerritoryModule } from './territory/territory.module';
import { OrganisationModule } from './organisation/organisation.module';
import { PermissionGroupsModule } from './permission-groups/permission-groups.module';
import { ProductsModule } from './products/products.module';
import { ContactGroupsModule } from './contact-groups/contact-groups.module';
import { BroadcastsModule } from './brodcasts/broadcasts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ContactsModule,
    CategoriesModule,
    RolesModule,
    PermissionsModule,
    UsersModule,
    AuthModule,
    SubCategoriesModule,
    TerritoryModule,
    OrganisationModule,
    PermissionGroupsModule,
    ProductsModule,
    ContactGroupsModule,
    BroadcastsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
