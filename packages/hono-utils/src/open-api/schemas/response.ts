import { status } from '@ladc.dev/http-utils/status';
import { JsonContent } from '@/src/open-api/schemas/content';
import { z } from '@hono/zod-openapi';
import { ZodSchema } from '@/src/open-api/schemas/constants';

type ResponseParams = {
  [key in status.HttpStatusCode]?: {
    schema: ZodSchema;
    description: string;
  };
};

export const createResponses = (
  data: ResponseParams,
): Record<status.HttpStatusCode, ReturnType<typeof JsonContent>> => {
  return Object.entries(data).reduce(
    (responses, [code, params]) => {
      if (params && code) {
        responses[Number(code) as status.HttpStatusCode] = JsonContent({
          schema: params.schema,
          description: params.description,
        });
      }
      return responses;
    },
    {} as Record<status.HttpStatusCode, ReturnType<typeof JsonContent>>,
  );
};

export function errorResponse({
  code,
  message = '',
  details = '',
}: {
  code: string;
  message?: string;
  details?: string;
}) {
  return z.object({
    success: z.boolean().openapi({
      example: false,
    }),
    error: z
      .object({
        code: z.string().default(code),
        message: z.optional(z.string().default(message)),
        details: z.optional(z.string().default(details)),
      })
      .openapi({
        example: {
          code,
          message,
          details,
        },
      }),
  });
}
