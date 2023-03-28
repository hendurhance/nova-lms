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
        const { name, description, startDate, endDate, duration, students } =
            createLessonInput;
        const lesson = this.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            duration,
            description: description || '',
            students,
        });
        return this.save(lesson);
    }

    async assignStudentsToLesson(
        assignStudentsToLessonInput: AssignStudentsToLessonInput,
    ): Promise<Lesson> {
        const { lessonId, studentIds } = assignStudentsToLessonInput;
        const lesson = await this.findOneBy({ id: lessonId });
        lesson.students = [...lesson.students, ...studentIds];
        lesson.students = [...new Set(lesson.students)];

        return this.save(lesson);
    }
}
