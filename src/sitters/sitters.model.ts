import { Document } from 'mongoose';

export interface Sitter extends Document {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly gender: string;
}
