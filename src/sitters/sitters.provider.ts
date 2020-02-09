import { sitterModel, databaseConnection } from '../constants';
import { SitterSchema } from './schemas/sitter.schema';
import { Connection } from 'mongoose';

export const sittersProviders = [
  {
    provide: sitterModel,
    useFactory: (connection: Connection) =>
      connection.model('Sitter', SitterSchema),
    inject: [databaseConnection],
  },
];
