import { Table, Column, Model, DataType, Default, PrimaryKey } from 'sequelize-typescript';

@Table
export class Apod extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
  })
  id!: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  explanation!: Text;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url!: string;
}
