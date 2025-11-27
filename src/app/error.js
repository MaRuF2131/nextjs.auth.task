"use client";

export default function GlobalError({ error, reset }) {
  console.error("Global Error:", error);

  return (
    <html>
      <body>
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-red-600">Unexpected Error</h1>
          <p className="text-gray-600 mt-2">
            Something went wrong in the application.
          </p>

          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
