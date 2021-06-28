import { BikeTheft } from "src/bike-thefts/entities/bike-theft.entity";
import { PoliceDepartment } from "src/police-departments/entities/police-department.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    // One police officer (user) can 
    @OneToOne(type => BikeTheft, bt => bt.id)
    bikeTheft?: BikeTheft;
}