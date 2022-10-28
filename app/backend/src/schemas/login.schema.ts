import * as Joi from 'joi';
import Messages from '../enums/messages';

const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': Messages.MUST_FILEDS_FILLED,
      'string.email': Messages.INVALID_PASSWORD,
      'string.empty': Messages.MUST_FILEDS_FILLED,
    }),
  password: Joi.string().min(6).required().empty()
    .messages({
      'any.required': Messages.MUST_FILEDS_FILLED,
      'string.min': Messages.PASSWORD_LENGTH_SIX,
      'string.empty': Messages.MUST_FILEDS_FILLED,
    }),
});

export default loginSchema;
