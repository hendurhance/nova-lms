import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LessonType {
  @Field()
  id: string;
  name: string;
  description: string;
  duration: number;
  startDate: string;
  endDate: string;
}
