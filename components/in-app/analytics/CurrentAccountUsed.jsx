import React from 'react';

const CardClient = ({ account }) => {
    return (
        <article className="card-client">
            <figure className="user-picture">
                <img src={account.profile_pic_url} alt={account.username} />
            </figure>
            <div className="client-info">
                <h2 className="name-client">{account.full_name}</h2>
                <span className="role">@{account.username}</span>
            </div>
            <nav className="social-media">
                {/* Social Media Links hier */}
            </nav>
        </article>
    );
};


export default CardClient;
