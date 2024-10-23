import { APLITCATION_JSON, ZodSchema } from "@/src/open-api/schemas/constants";

export function JsonBody<T extends ZodSchema>({
  schema,
  description,
}: {
  schema: T;
  description: string;
}) {
  return {
    body: {
      content: {
        [APLITCATION_JSON]: {
          schema,
        },
      },
      description,
    },
  };
}
