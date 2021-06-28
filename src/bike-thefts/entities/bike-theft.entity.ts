import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(type => User, pd => pd.id)
    assignedPoliceOfficer?: User;
}

export enum BikeTheftStatus {
    UNASSIGNED = 0,
    ASSIGNED = 1,
    IN_PROGRESS = 2,
    RESOLVED = 3,
    REJECTED = 4,
}