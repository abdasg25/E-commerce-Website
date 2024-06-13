
import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("*Please enter your username"),
  password: Yup.string().min(8).required("*Please enter your password")
});