import * as yup from 'yup';

export const schema = yup.object({
  organisation: yup.string().required('field is required'),
  repository: yup.string().notRequired(),
  max: yup
    .string()
    .notRequired()
    .test({
      name: 'max',
      test(value, ctx) {
        const { min } = ctx.parent;

        if (value !== null && value !== undefined && +value > 0 && +min > +value) {
          return ctx.createError({ message: "Min value can't be more the max value" });
        }

        return true;
      }
    }),
  min: yup.string().test({
    name: 'min',
    test(value = '0', ctx) {
      const { max } = ctx.parent;

      if (+max > 0 && +value > +max) {
        return ctx.createError({ message: "Min value can't be more the max value" });
      }

      return true;
    }
  })
});
