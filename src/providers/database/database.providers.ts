import * as mongoose from 'mongoose';
import { databaseConnection } from 'src/constants';

export const databaseProviders = [
  {
    provide: databaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  },
];
