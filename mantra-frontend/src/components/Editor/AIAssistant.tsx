import React from "react";

const AIAssistant: React.FC = () => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold">AI Assistant</h2>
      <p>Need help? Type your query below.</p>
      <input
        type="text"
        placeholder="Ask your question..."
        className="mt-2 p-2 w-full border rounded"
      />
    </div>
  );
};

export default AIAssistant;
