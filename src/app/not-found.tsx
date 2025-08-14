import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-md px-4 py-2 border"
          >
            Go to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-md px-4 py-2 bg-primary"
          >
            Contact support
          </Link>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          If you think this is an error, please let us know.
        </div>
      </div>
    </main>
  );
}
