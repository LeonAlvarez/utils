import { Hook } from '@hono/zod-openapi';
import { UNPROCESSABLE_ENTITY } from '@ladc.dev/http-utils/dist/status/codes';

export * from './schemas'

export const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    let { error, success } = result;

    if (error?.name === "ZodError") {
      delete (error as { name?: string }).name;
    }

    return c.json(
      {
        success: success,
        error: error,
      },
      UNPROCESSABLE_ENTITY
    );
  }
};
