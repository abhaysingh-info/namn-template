import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  teamID: string;

  @Prop({ required: true })
  teamName: string;

  @Prop({ required: true })
  teamMembersEmail: string[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
export type TeamDocument = HydratedDocument<Team>;
