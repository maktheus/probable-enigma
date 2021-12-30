import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4 } from "uuid"
@Entity("specifications")
class SpecificationModel {
    
    @PrimaryColumn()
    id ?: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(this.id == null){
           this.id = uuidV4();
        }
    }


}

export {SpecificationModel} 