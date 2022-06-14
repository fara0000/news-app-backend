import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator";

@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    @IsString()
    @IsNotEmpty()
    @Min(4)
    @Max(50)
    name: string;

    @Column({ nullable: false })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({ nullable: false })
    @IsString()
    @IsNotEmpty()
    password: string;
}