import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
    MONGO_URL: Joi.string().required(),
    STAGE: Joi.string().valid('dev', 'prod').default('dev'),
    PORT: Joi.number().default(3000),
});
