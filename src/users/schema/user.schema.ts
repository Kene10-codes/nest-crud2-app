import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Role } from '../enum/roles.enum';

@Schema({
    timestamps: true
})

export class Profile {
    @Prop()
    name: string;

    @Prop({unique: ['Duplicate email entered']})
    email: string;

    @Prop()
    password: string;

    @Prop({
        type: [{type: String, enum: Role}],
        default: [Role.User]
    })
    role: Role[]
}

export const profileSchema = SchemaFactory.createForClass(Profile)