import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BikeTheft {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    bikeLicenseNumber?: string;
    @Column()
    bikeColor?: string;
    @Column()
    bikeType?: string;
    @Column()
    ownerFullName?: string;
    @Column()
    theftDate?: Date;
    @Column()
    theftDescription?: string;
    @Column()
    theftAddress?: string;
    @Column()
    caseStatus: BikeTheftStatus;
}

export enum BikeTheftStatus {
    UNASSIGNED = 0,
    ASSIGNED = 1,
    IN_PROGRESS = 2,
    RESOLVED = 3,
    REJECTED = 4,
}