import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class EventRegistration extends Document {
  @Prop({ required: true, ref: 'Event' })
  eventId: string;

  @Prop({ required: true, ref: 'Team' })
  teamId: string;

  @Prop({ required: true })
  score: number;

  @Prop()
  notes: string;
}

export type EventRegistrationDocument = HydratedDocument<EventRegistration>;
export const EventRegistrationSchema =
  SchemaFactory.createForClass(EventRegistration);
