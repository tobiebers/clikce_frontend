import React, {useEffect, useState} from 'react';


export default function PerformingAccounts() {
  const [nameText, setnameText] = useState("");
  const [likesText, setlikesText] = useState("");
  const [profilePicture, setProfilePicture] = useState("PlaceHolder.jpg");
    useEffect(() => {
    const fetchPerformingAccounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-performing-account');
        const data = await response.json();
        setnameText(data.nameText);
        setlikesText(data.likesText);
        setProfilePicture(data.profilePicture)
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchPerformingAccounts();
  }, []);
  return (
    <div className="top-performing-container">
        <img src={'/ProfilePicPlaceholder.jpg'} style={{ width: '15%', height: '15%', marginRight: '14px' }}/>
      <div className="content, text-s">
        <h4 className="heading, text-n">Top Performing Accounts</h4>
        <div className="text">
          <p>{nameText}</p>
        </div>
        <div className="text, text-s">
          <p>{likesText}</p>
        </div>
      </div>
    </div>
  );
}
