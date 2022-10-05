import { Joi, Segments, celebrate } from 'celebrate'

export const homeSchema = celebrate({
  [Segments.QUERY]: Joi.object().keys({}),
})
