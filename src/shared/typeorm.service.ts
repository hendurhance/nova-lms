import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Lesson } from '../lesson/lesson.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    @Inject(ConfigService)
    private readonly config: ConfigService;

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            url: this.config.get<string>('MONGO_URL'),
            synchronize: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            logging: true,
            entities: [
                Lesson, // <-- Add this line
            ],
        };
    }
}
