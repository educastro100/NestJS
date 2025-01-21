import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name : 'address'})
/**
 * Represents an address entity.
 */
export class AddressEntity {

    /**
     * The unique identifier for the address.
     */
    @PrimaryGeneratedColumn('rowid')
    id: number;

    /**
     * The identifier of the user associated with the address.
     */
    @Column({ name: 'user_id', nullable: false })
    userId: number;

    /**
     * The complement of the address.
     */
    @Column({ name: 'complement' })
    complement: string;

    /**
     * The number of the address.
     */
    @Column({ name: 'number', nullable: false })
    numberAddress: number;

    /**
     * The postal code (CEP) of the address.
     */
    @Column({ name: 'cep', nullable: false })
    cep: string;

    /**
     * The identifier of the city associated with the address.
     */
    @Column({ name: 'city_id', nullable: false })
    cityId: number;

    /**
     * The date and time when the address was created.
     */
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    /**
     * The date and time when the address was last updated.
     */
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}