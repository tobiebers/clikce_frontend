import React from 'react';

const FlipCard = () => {
  return (
    <div className="flip-card">
      <div>
        <div className="flip-card-front">
          <img src="/PlaceHolderFLipCard.png" alt="Top-Post" style={{ width: '100%', height: '80%' }} />
          <h3 className="title">Top-Post</h3>
        </div>
        <div className="flip-card-back">
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
