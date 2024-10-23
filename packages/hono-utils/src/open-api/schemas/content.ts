import { APLITCATION_JSON, ZodSchema } from "@/src/open-api/schemas/constants";

export function JsonContent<T extends ZodSchema>({
  schema,
  description,
}: {
  schema: T;
  description: string;
  type?: string;
}) {
  return {
    content: {
      [APLITCATION_JSON]: {
        schema,
      },
    },
    description,
  };
}