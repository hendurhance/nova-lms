import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { AssignStudentsToLessonInput } from './input/assign-students-to-lesson.input';

@Injectable()
export class LessonsRepository extends Repository<Lesson> {
    constructor(dataSource: DataSource) {
        super(Lesson, dataSource.createEntityManager());
    }

    async createLesson(createLessonInput: any): Promise<Lesson> {
        const { name, description, startDate, endDate, duration } =
            createLessonInput;
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

    async assignStudentsToLesson(
        assignStudentsToLessonInput: AssignStudentsToLessonInput,
    ): Promise<Lesson> {
        const { lessonId, studentIds } = assignStudentsToLessonInput;
        const lesson = await this.findOneBy({ id: lessonId });
        lesson.students = Array.isArray(lesson.students)
            ? [...lesson.students, ...studentIds]
            : [...studentIds];
        return this.save(lesson);
    }
}
