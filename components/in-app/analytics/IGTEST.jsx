import React from 'react';

const TooltipContainer = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">Ui</div>
            <div className="details">
              <div className="name">User</div>
              <div className="username">@username</div>
            </div>
          </div>
          <div className="about">800+ Followers</div>
        </div>
      </div>
      <div className="text">
        <a className="icon" href="#">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="instagramSVG">
              {/* SVG hier */}
            </span>
          </div>
          <div className="text">Instagram</div>
        </a>
      </div>
    </div>
  );
};

export default TooltipContainer;
