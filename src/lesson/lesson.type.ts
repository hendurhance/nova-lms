import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
    @Field((type) => ID)
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    duration: number;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}
