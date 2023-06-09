import { Schema, Types, Model, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      default: "I'm the description"
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const UserModel = model('Users', UserSchema)
export default UserModel
