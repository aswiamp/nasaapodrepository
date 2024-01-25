// models/index.ts
import  sequelize  from '../database/connection';
import { Apod } from './Apod';

sequelize.addModels([Apod]);

// Export the models
export { Apod };
