import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonsRepository } from './lessons.repository';
import { CreateLessonInput } from './input/create-lesson.input';
import { AssignStudentsToLessonInput } from './input/assign-students-to-lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonsRepository)
        private lessonsRepository: LessonsRepository,
    ) {}

    /**
     * @description Get all lessons
     * @returns {Promise<Lesson[]>}
     */
    async getLessons(): Promise<Lesson[]> {
        return this.lessonsRepository.find();
    }

    /**
     * @description Get a lesson by id
     * @param id
     * @returns {Promise<Lesson>}
     */
    async getLesson(id: string): Promise<Lesson> {
        return this.lessonsRepository.findOneBy({ id });
    }

    /**
     * @description Create a new lesson
     * @param createLessonInput
     * @returns {Promise<Lesson>}
     */
    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        return this.lessonsRepository.createLesson(createLessonInput);
    }

    /**
     * @description Assign a student to a lesson
     * @param AssignStudentsToLessonInput
     * @returns {Promise<Lesson>}
     */
    async assignStudentsToLesson(
        assignStudentsToLessonInput: AssignStudentsToLessonInput,
    ): Promise<Lesson> {
        return this.lessonsRepository.assignStudentsToLesson(
            assignStudentsToLessonInput,
        );
    }
}
