export interface UserInterface {
  id: number
  name: string
  email: string
  password: string
  CreatedAt: Date
  UpdatedAt: Date
  DeletedAt: Date
  passwordResetToken: string
  passwordResetExpires: Date
}
