import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/typeorm.service';
import { configValidationSchema } from './schema/config.schema';

const envFilePath: string = getEnvPath();

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath,
            isGlobal: true,
            validationSchema: configValidationSchema,
        }),
        TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
        }),
        LessonModule,
    ],
})
export class AppModule {}
