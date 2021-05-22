import { Connection, getConnection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PermissionGroup } from '../../permission-groups/entities/permission-group.entity';
import { Permission } from '../../permissions/entities/permission.entity';
import { Role } from '../../roles/entities/role.entity';
import { User } from '../../users/entities/user.entity';

export default class AppSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const entities = [Role, PermissionGroup, Permission, User];
    // const entities = [Permission, RolePermission];

    // for (const singleEntity of entities) {
    //   const repository = getConnection().getRepository(singleEntity); // Get repository
    //   // await repository.clear(); // Clear each entity table's content
    //   await repository.query(
    //     `TRUNCATE TABLE "${repository.metadata.tableName}" CASCADE;`,
    //   ); // Clear each entity table's content
    // }

    // await connection
    // .createQueryBuilder()
    // .insert()
    // .into()
    // .values([

    // ])
    // .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([
        {
          id: '6ad9fcfa-f89c-42e8-9f9e-a7e0ee6036cd',
          name: 'Administrator',
          slug: 'administrator',
          description: 'Administrator Role',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(PermissionGroup)
      .values([
        {
          id: 'cfb5beae-71b2-4c56-9b47-968d683d0291',
          createdAt: '2021-02-14T21:45:17.290Z',
          updatedAt: '2021-02-14T21:45:17.290Z',
          deletedAt: null,
          name: 'User Management',
          slug: 'user_management',
          description: 'Lorem Ipsum',
        },
        {
          id: 'd0a3c1cb-3a70-4efe-b791-0e7ce105b7b0',
          createdAt: '2021-02-15T01:15:30.195Z',
          updatedAt: '2021-02-15T01:15:30.195Z',
          deletedAt: null,
          name: 'Organization Management',
          slug: 'organization_management',
          description: 'Organization Management',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values([
        {
          id: '2a937a9b-b92d-4a37-902a-dc573da14ff8',
          createdAt: '2021-02-15T00:14:30.219Z',
          updatedAt: '2021-02-15T00:14:30.219Z',
          deletedAt: null,
          name: 'Create User',
          slug: 'user.create',
          description: 'Lorem Ipsum',
          permissionGroupId: 'cfb5beae-71b2-4c56-9b47-968d683d0291',
        },
        {
          id: '51c2dec9-be02-436a-88d1-f5988d35de00',
          createdAt: '2021-02-15T00:15:13.637Z',
          updatedAt: '2021-02-15T00:15:13.637Z',
          deletedAt: null,
          name: 'Update User',
          slug: 'user.update',
          description: 'Lorem Ipsum',
          permissionGroupId: 'cfb5beae-71b2-4c56-9b47-968d683d0291',
        },
        {
          id: 'aca4dee3-2c5d-4ffc-85fe-c7de138d03d0',
          createdAt: '2021-02-15T00:15:21.451Z',
          updatedAt: '2021-02-15T00:15:21.451Z',
          deletedAt: null,
          name: 'Remove User',
          slug: 'user.remove',
          description: 'Lorem Ipsum',
          permissionGroupId: 'cfb5beae-71b2-4c56-9b47-968d683d0291',
        },
        {
          id: '125beea8-c96e-4b2f-92e2-431788f73624',
          createdAt: '2021-02-15T01:16:01.703Z',
          updatedAt: '2021-02-15T01:16:01.703Z',
          deletedAt: null,
          name: 'Create Organization',
          slug: 'organization.create',
          description: 'Lorem ipsum',
          permissionGroupId: 'd0a3c1cb-3a70-4efe-b791-0e7ce105b7b0',
        },
        {
          id: '6c2f13a9-f0fc-4af4-a940-c6b7e4d955cc',
          createdAt: '2021-02-15T01:18:06.727Z',
          updatedAt: '2021-02-15T01:18:06.727Z',
          deletedAt: null,
          name: 'Update Organization',
          slug: 'organization.update',
          description: 'Lorem ipsum',
          permissionGroupId: 'd0a3c1cb-3a70-4efe-b791-0e7ce105b7b0',
        },
        {
          id: '756c186d-5f09-4ed9-b03c-0157ee25df41',
          createdAt: '2021-02-15T01:28:33.367Z',
          updatedAt: '2021-02-15T01:28:33.367Z',
          deletedAt: null,
          name: 'Remove Organization',
          slug: 'organization.remove',
          description: 'Lorem ipsum',
          permissionGroupId: 'd0a3c1cb-3a70-4efe-b791-0e7ce105b7b0',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstName: 'Administrator',
          lastName: '',
          email: 'admin@vedreport.com',
          telephone: '0907463738',
          password:
            '$2b$10$nAcoWCCNoPXuIgfOfJM86OK1GW9cEW6qhLKYkHC/bEffARLpdRZHC',
          roleId: '6ad9fcfa-f89c-42e8-9f9e-a7e0ee6036cd',
        },
      ])
      .execute();
  }
}
