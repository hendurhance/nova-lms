import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectIdColumn,
    PrimaryColumn,
} from 'typeorm';

@Entity()
export class Lesson {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column()
    students: string[];

    @CreateDateColumn()
    createdAt: Date;
}
