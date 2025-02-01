import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 sm:p-20 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <header className="mb-6 text-center">
          <Image
            className="mx-auto dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800 dark:text-gray-100">
            My Markdown Notes
          </h1>
        </header>
        <main>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Start typing your markdown note here..."
          ></textarea>
        </main>
        <footer className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Markdown Notes App</p>
        </footer>
      </div>
    </div>
  );
}
