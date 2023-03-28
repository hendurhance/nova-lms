import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
} from 'class-validator';

@InputType()
export class CreateLessonInput {
    @Field()
    @IsString()
    @Length(2, 20)
    name: string;

    @Field({ nullable: true })
    @IsString()
    description?: string;

    @Field()
    @IsNumber()
    duration: number;

    @Field()
    @IsNotEmpty()
    @IsDate()
    startDate: Date;

    @Field()
    @IsNotEmpty()
    @IsDate()
    endDate: Date;

    @Field((type) => [ID], { defaultValue: [] })
    @IsUUID('4', { each: true })
    students: string[];
}
