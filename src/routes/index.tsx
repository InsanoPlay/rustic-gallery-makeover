import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lucas Matias | Cantor Sertanejo" },
      { name: "description", content: "Lucas Matias - Cantor Sertanejo. Shows, agenda e contato." },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/site.html"
      title="Lucas Matias"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        margin: 0,
        padding: 0,
        display: "block",
      }}
    />
  );
}
