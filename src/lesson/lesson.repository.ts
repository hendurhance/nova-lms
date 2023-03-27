import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonRepository extends Repository<Lesson> {
    constructor(dataSource: DataSource) {
        super(Lesson, dataSource.createEntityManager());
    }

    async createLesson(createLessonDto: any): Promise<Lesson> {
        const { name, description, startDate, endDate, duration } =
            createLessonDto;
        const lesson = this.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            duration,
            description: description || '',
        });
        return this.save(lesson);
    }
}
