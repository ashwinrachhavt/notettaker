import { useState } from "react";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (title.trim() === "" && content.trim() === "") {
      alert("Please enter a title or content for the note.");
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: title.trim() || "Untitled Note",
      content: content.trim(),
    };

    const existingNotes = localStorage.getItem("notes");
    const notes = existingNotes ? JSON.parse(existingNotes) : [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Clear the form
    setTitle("");
    setContent("");
    alert("Note saved successfully!");
  };

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create a New Note</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Enter note title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Enter note content in Markdown"
          rows={6}
        ></textarea>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Save Note
      </button>
    </div>
  );
}
