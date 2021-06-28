import { BikeTheftStatus } from "src/bike-thefts/entities/bike-theft.entity";
import { Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class BikeTheftEvent {
    @PrimaryColumn()
    @CreateDateColumn()
    timestamp: Timestamp;
    
    @Column()
    bikeTheftId: number;

    @Column()
    userId?: number;

    @Column()
    caseStatus: BikeTheftStatus;
}
