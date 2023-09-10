// src/CollapsibleCodeBlock.js
import React, { useState } from "react";

interface CollapsibleCodeBlockProps {
  code: string;
  language: string;
}

const CollapsibleCodeBlock = (props: CollapsibleCodeBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleCollapse}
        className="collapsible-button bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 w-full"
      >
        1. Reverse a Linked List
      </button>
      {isOpen && (
        <pre className="mt-2">
          <code
            className={`language-${props.language}  p-2 bg-slate-900 rounded-lg block text-white`}
          >
            {props.code}
          </code>
        </pre>
      )}
    </div>
  );
};

export default CollapsibleCodeBlock;
