import * as yup from "yup";

const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((data) => data.toString())
    .required(),
});

export default userSchema;
