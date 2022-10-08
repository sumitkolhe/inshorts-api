import { Joi, Segments, celebrate } from 'celebrate'

export const paginationSchema = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    offset: Joi.number().default(0).optional(),
    limit: Joi.number().default(10).optional(),
  }),
})
