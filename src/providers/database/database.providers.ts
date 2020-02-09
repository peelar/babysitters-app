import * as mongoose from 'mongoose';
import { databaseConnection } from 'src/constants';

export const databaseProviders = [
  {
    provide: databaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      process.env.NODE_ENV === 'development'
        ? mongoose.connect(process.env.DB_DEV_URI)
        : mongoose.connect(process.env.DB_PROD_URI),
  },
];
