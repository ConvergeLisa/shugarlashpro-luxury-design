import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SHUGARLASHPRO — Luxury Lash Studio in Sandton" },
      { name: "description", content: "Premium lash extensions, brows & nails in Sandton. By The Famous Lash Professionals." },
      { name: "author", content: "Shugarlashpro" },
      { property: "og:title", content: "SHUGARLASHPRO — Luxury Lash Studio in Sandton" },
      { property: "og:description", content: "Premium lash extensions, brows & nails in Sandton. By The Famous Lash Professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "SHUGARLASHPRO — Luxury Lash Studio in Sandton" },
      { name: "twitter:description", content: "Premium lash extensions, brows & nails in Sandton. By The Famous Lash Professionals." },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5d9e096e-fbde-4894-b36a-0db2c159cda9/id-preview-53684d1a--8c2ed0e8-ba49-488b-85e7-09f1cd9d5ec3.lovable.app-1777889477744.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5d9e096e-fbde-4894-b36a-0db2c159cda9/id-preview-53684d1a--8c2ed0e8-ba49-488b-85e7-09f1cd9d5ec3.lovable.app-1777889477744.png",
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
});

function RootLayout() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
}
