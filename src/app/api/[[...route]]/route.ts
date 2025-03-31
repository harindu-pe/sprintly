import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.get("/hello/:projectId", (c) => {
  const projectId = c.req.param("projectId");

  return c.json({
    project: projectId,
  });
  
});

export const GET = handle(app);
