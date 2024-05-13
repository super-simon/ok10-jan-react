import Joi from "joi";

export const userValidator = Joi.object({
  username: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({ "string.pattern.base": "only letters accepted" }),
  age: Joi.number().min(0).max(100).required().messages({
    "number.min": "Age only positive",
    "number.max": "Max age is 100",
  }),
});
