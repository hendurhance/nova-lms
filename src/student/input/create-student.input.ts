import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNumber, IsString, Length } from 'class-validator';
import { StudentGenderEnum } from '../student-gender.enum';

@InputType()
export class CreateStudentInput {
    @Field()
    @IsString()
    @Length(3, 20)
    firstName: string;

    @Field()
    @IsString()
    @Length(3, 20)
    lastName: string;

    @Field()
    @IsNumber()
    age: number;

    @Field()
    @IsEnum(StudentGenderEnum)
    gender: string;

    @Field()
    @IsEmail()
    email: string;
}
