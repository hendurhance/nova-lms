import { InputType, Field } from '@nestjs/graphql';
import {
    IsDate,
    IsDateString,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
} from 'class-validator';

@InputType()
export class CreateLessonInput {
    @Field()
    @IsString()
    @Length(5, 20)
    name: string;

    @Field({ nullable: true })
    @IsString()
    description?: string;

    @Field()
    @IsNumber()
    duration: number;

    @Field()
    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @Field()
    @IsNotEmpty()
    @IsDateString()
    endDate: Date;
}
