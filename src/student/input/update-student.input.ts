import { Field, InputType } from '@nestjs/graphql';
import {
    IsEmail,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    Length,
} from 'class-validator';
import { StudentGenderEnum } from '../student-gender.enum';

@InputType()
export class UpdateStudentInput {
    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    @Length(3, 20)
    firstName?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    @Length(3, 20)
    lastName?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsNumber()
    age?: number;

    @Field({ nullable: true })
    @IsOptional()
    @IsEnum(StudentGenderEnum)
    gender?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsEmail()
    email?: string;
}
