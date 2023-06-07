import { Schema, Types, Model, model } from 'mongoose'
import { Car } from '../interfaces/car.interface'

const OrderSchema = new Schema<Car>(
  {
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const OrderModel = model('order', OrderSchema)
export default OrderModel
