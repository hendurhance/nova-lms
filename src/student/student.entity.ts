import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column({ unique: true })
    email: string;
}
