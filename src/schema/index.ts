import * as yup from "yup";
import { FEED_BACK_VALIDATION } from "../constants ";

export const loginSchema = yup
  .object({
    userName: yup
      .string()
      .required(FEED_BACK_VALIDATION.required)
      .matches(/^[a-zA-Z\s]+$/, FEED_BACK_VALIDATION.validName)
      .min(2, FEED_BACK_VALIDATION.minNameCharacters)
      .max(20, FEED_BACK_VALIDATION.maxCharacters)
      .trim(),

    password: yup
      .string()
      .required(FEED_BACK_VALIDATION.required)
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/,
        FEED_BACK_VALIDATION.validPassword
      )
      .min(8, FEED_BACK_VALIDATION.minPasswordCharacters)
      .max(20, FEED_BACK_VALIDATION.maxCharacters),
  })
  .required();

export const createPostSchema = yup.object({
  body: yup.string().required(FEED_BACK_VALIDATION.required).trim(),
  title: yup.string().required(FEED_BACK_VALIDATION.required).trim(),
});
export const updatePostSchema = yup.object({
  body: yup.string().trim(),
  title: yup.string().trim(),
});
