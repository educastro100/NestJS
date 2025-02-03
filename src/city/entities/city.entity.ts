import { AddressEntity } from "src/address/entities/address.entity";
import { StateEntity } from "src/state/entities/state.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @OneToMany(() => AddressEntity, (address) => address.city)
        addresses?: AddressEntity[];


        
    @ManyToOne(() => StateEntity, (state) => state.cities)
    @JoinColumn({name : 'state_id', referencedColumnName : 'id'})
    state?: StateEntity

}