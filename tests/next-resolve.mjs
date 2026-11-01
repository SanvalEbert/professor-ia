// O pacote `next` não declara "exports"; em ESM puro, `next/server` precisa do sufixo .js.
// Este gancho permite importar as rotas da API diretamente nos testes.
import { register } from "node:module";

register(
  "data:text/javascript," +
    encodeURIComponent(`
export async function resolve(specifier, context, next) {
  if (specifier === "next/server") return next("next/server.js", context);
  return next(specifier, context);
}`),
  import.meta.url,
);
