'use client';
import React, { useState, useEffect } from "react";

const CommandPalette: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show palette when user presses "/" key outside an input
      if (e.key === "/" && (e.target as HTMLElement).tagName !== "INPUT") {
        setVisible(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg shadow-lg p-4 z-50">
      <input
        type="text"
        placeholder="Type a command..."
        className="w-full p-2 border rounded"
      />
      <ul className="mt-2">
        <li>/text - Add text block</li>
        <li>/heading - Add heading block</li>
        <li>/image - Add image block</li>
        <li>/code - Add code block</li>
      </ul>
    </div>
  );
};

export default CommandPalette;
