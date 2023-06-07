import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handler'
import { generateToken } from '../utils/jwt.handler'

const resgisterNewUser = async ({ email, password, name }: User) => {
  const checkIfExist = await UserModel.findOne({ email })
  if (checkIfExist != null) return 'ALREADY_USER'
  const passHash = await encrypt(password)
  const resgisterNewUser = await UserModel.create({
    email,
    password: passHash,
    name
  })
  return resgisterNewUser
}

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email })
  if (user == null) return 'NOT_FOUND_USER'
  const passHash = user.password
  const isCorrect = await verified(password, passHash)
  if (!isCorrect) return 'PASSWORD_INCORRECT'

  const token = await generateToken(user.email)
  const data = {
    token,
    user
  }

  return data
}

export { resgisterNewUser, loginUser }
