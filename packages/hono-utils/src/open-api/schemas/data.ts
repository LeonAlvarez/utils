import { z } from "@hono/zod-openapi";

export const paginatedSchema = (schema: z.AnyZodObject) =>
  dataListSchema(schema).extend({
    meta: z.object({
      total: z.number(),
      page: z.number(),
      perPage: z.number(),
    }),
  });

export const dataListSchema = (schema: z.AnyZodObject) =>
  z.strictObject({
    data: z.array(schema),
  });

export const dataSchema = (schema: z.AnyZodObject) =>
  z.strictObject({
    data: schema,
  });
