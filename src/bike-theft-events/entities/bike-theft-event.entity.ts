import { BikeTheftStatus } from "src/bike-thefts/entities/bike-theft.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class BikeTheftEvent {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn()
    timestamp?: Timestamp;
    
    @Column()
    bikeTheftId: number;

    @Column()
    userId?: number;

    @Column()
    caseStatus: BikeTheftStatus;
}
