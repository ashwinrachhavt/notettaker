import React from "react";
import TipTap from "../TipTap";
import Toolbar from "./Toolbar";
import CommandPalette from "./CommandPalette";
import AIAssistant from "./AIAssistant";

const Editor: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen bg-background p-6 rounded-lg shadow-md">
      <header className="pb-2 mb-4 border-b border-border">
        <Toolbar />
      </header>
      <main className="mb-4">
        <TipTap />
      </main>
      <aside className="pt-2 mt-4 border-t border-border">
        <AIAssistant />
      </aside>
      <CommandPalette />
    </div>
  );
};

export default Editor;
