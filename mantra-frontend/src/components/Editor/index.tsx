import React from "react";
import TipTap from "../TipTap";
import Toolbar from "./Toolbar";
import CommandPalette from "./CommandPalette";
import AIAssistant from "./AIAssistant";

const Editor: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 border-b">
        <Toolbar />
      </header>
      <main className="flex-1 overflow-auto p-4">
        <TipTap />
      </main>
      <aside className="p-4 border-t">
        <AIAssistant />
      </aside>
      <CommandPalette />
    </div>
  );
};

export default Editor;
