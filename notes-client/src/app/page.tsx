import Image from "next/image";
import NoteForm from "./components/NoteForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 sm:p-20">
      <header className="mb-8 text-center">
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
        <NoteForm />
      </main>
      <footer className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Markdown Notes App</p>
      </footer>
    </div>
  );
}
