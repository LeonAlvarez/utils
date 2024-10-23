import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference, ApiReferenceOptions } from "@scalar/hono-api-reference";

type ConfigureOpenApiOptions = {
  title: string;
  version: string;
  openapiVersion?: string;
  theme?: ApiReferenceOptions["theme"];
  layout?: ApiReferenceOptions["layout"];
  referenceUrl?: string;
  docUrl?: string;
  showSidebar?: boolean;
};

export default function configureOpenApiDocs(
  app: OpenAPIHono,
  {
    title,
    version,
    openapiVersion = "3.0.0",
    theme = "kepler",
    layout = "classic",
    docUrl = "/openapi.json",
    referenceUrl = "/docs",
    showSidebar = true,
  }: ConfigureOpenApiOptions
) {
  app.doc(docUrl, {
    openapi: openapiVersion,
    info: {
      version,
      title,
    },
  });

  app.get(
    referenceUrl,
    apiReference({
      theme,
      layout,
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      defaultOpenAllTags: true,
      hiddenClients: [],
      showSidebar,
      spec: {
        url: docUrl,
      },
    })
  );
}
