import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    _id?: string

    @Prop({unique: true , required: true})
    email: string;

    @Prop({ required: true })
    name: string;

    @Prop({ min: 6, required: true })
    password?: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: [String] })
    roles: string[];

}

export const UserSchema = SchemaFactory.createForClass( User );
