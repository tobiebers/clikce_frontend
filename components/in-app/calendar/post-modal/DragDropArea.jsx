import React from 'react';

const DragDropArea = ({ onDragOver, onDrop }) => {
  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      className="dragDropArea"
    >
      Drag and drop a file here
    </div>
  );
};

export default DragDropArea;
