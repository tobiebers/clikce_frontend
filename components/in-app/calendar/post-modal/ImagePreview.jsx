import React from 'react';

const ImagePreview = ({ imagePreviewUrl }) => {
  if (!imagePreviewUrl) {
    return null;
  }

  return (
    <div>
      <h5>Bildvorschau:</h5>
      <img src={imagePreviewUrl} alt="Vorschau" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImagePreview;
