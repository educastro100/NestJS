import { CityEntity } from "src/city/entities/city.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name : 'state'})
/**
 * Represents a state entity.
 * 
 * @class StateEntity
 * 
 * @property {number} id - The unique identifier for the state, generated automatically.
 * @property {string} name - The name of the state. This field is required.
 * @property {Date} createdAt - The date and time when the state was created.
 * @property {Date} updatedAt - The date and time when the state was last updated.
 * 
 * @decorator @PrimaryGeneratedColumn('rowid') - Marks the `id` property as a primary key with a generated value.
 * @decorator @Column - Marks the `name` property as a column in the database.
 * @decorator @CreateDateColumn - Marks the `createdAt` property as a column that stores the creation timestamp.
 * @decorator @UpdateDateColumn - Marks the `updatedAt` property as a column that stores the last update timestamp.
 */
export class StateEntity {

    @PrimaryGeneratedColumn('rowid')
    id : number;

    @Column({name : 'name', nullable : false})
    name: string;

    @CreateDateColumn({name : 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name : 'updated_at'})
    updatedAt: Date


    @OneToMany(() => CityEntity, (city) => city.state)
    cities?: CityEntity[];
}