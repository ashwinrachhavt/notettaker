import React from "react";
import { Button } from "../ui/button";

const Toolbar: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <Button>Bold</Button>
      <Button>Italic</Button>
      <Button>Underline</Button>
    </div>
  );
};

export default Toolbar;
