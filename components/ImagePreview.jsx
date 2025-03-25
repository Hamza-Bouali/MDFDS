import React, { useState } from 'react';
import '../styles/ImagePreview.css';

const ImagePreview = ({ file, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate a preview URL for the file
  const imageUrl = file ? URL.createObjectURL(file) : null;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError('Failed to load image');
  };

  // Clean up object URL when component unmounts
  React.useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  if (!file) {
    return null;
  }

  return (
    <div className="image-preview-container">
      <div className="image-preview-header">
        <h3>Image Preview</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="image-preview-content">
        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        <img 
          src={imageUrl} 
          alt="Preview" 
          onLoad={handleImageLoad} 
          onError={handleImageError}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
        <div className="image-info">
          <p>Name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
