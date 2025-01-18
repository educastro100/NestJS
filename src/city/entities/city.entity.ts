import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


/**
 * Entity representing a city.
 * 
 * @Entity 'city'
 */
@Entity({name : 'city'})
export class CityEntity {

    /**
     * Unique identifier for the city.
     * 
     * @PrimaryGeneratedColumn 'rowid'
     */
    @PrimaryGeneratedColumn('rowid')
    id : number;

    /**
     * Identifier for the state to which the city belongs.
     * 
     * @Column 'state_id'
     * @nullable false
     */
    @Column({name : 'state_id', nullable : false})
    stateId : number;

    /**
     * Name of the city.
     * 
     * @Column 'name'
     * @nullable false
     */
    @Column({name : 'name', nullable : false})
    name: string;

    /**
     * Timestamp when the city record was created.
     * 
     * @CreateDateColumn 'created_at'
     */
    @CreateDateColumn({name : 'created_at'})
    createdAt: Date

    /**
     * Timestamp when the city record was last updated.
     * 
     * @UpdateDateColumn 'updated_at'
     */
    @UpdateDateColumn({name : 'updated_at'})
    updatedAt: Date
}