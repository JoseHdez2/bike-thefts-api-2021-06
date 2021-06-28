import { PoliceDepartment } from "src/police-departments/entities/police-department.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    surnames?: string;

    @Column({unique: true})
    email: string;

    @ManyToOne(type => PoliceDepartment, pd => pd.id)
    policeDepartment?: PoliceDepartment;
}