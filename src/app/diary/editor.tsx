"use client";

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const DiaryEditor = ({ initialContent }: { initialContent: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
  });

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <EditorContent editor={editor} />
    </div>
  );
};

export default DiaryEditor;
