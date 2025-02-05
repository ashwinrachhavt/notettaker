'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className="border border-border rounded-lg p-4 bg-card shadow">
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
