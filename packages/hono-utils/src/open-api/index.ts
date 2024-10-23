import { Hook } from '@hono/zod-openapi';
import { status as HttpStatusCode } from '@ladc.dev/http-utils/status';

export * from './schemas';

export const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    let { error, success } = result;

    if (error?.name === 'ZodError') {
      delete (error as { name?: string }).name;
    }

    return c.json(
      {
        success: success,
        error: error,
      },
      HttpStatusCode.UNPROCESSABLE_ENTITY,
    );
  }
};
