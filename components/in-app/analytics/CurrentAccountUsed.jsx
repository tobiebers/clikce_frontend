import React from 'react';

const CardClient = () => {
  return (
    <article className="card-client">
      <figure className="user-picture">
        {/* SVG hier */}
      </figure>
      <div className="client-info">
        <h2 className="name-client">Jhon Doe</h2>
        <span className="role">CEO of WritBook</span>
      </div>
      <nav className="social-media">
        {/* Social Media Links hier */}
      </nav>
    </article>
  );
};

export default CardClient;
