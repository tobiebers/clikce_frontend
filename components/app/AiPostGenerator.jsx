import { useState } from 'react';

const SocialMediaPreview = () => {
  const examplePost = {
    instagram: "Ein wunderschöner Sonnenuntergang! #sunset #nature",
    tiktok: "Schaut euch diesen coolen Tanzmove an! #dance #fun"
  };

  const [platform, setPlatform] = useState('instagram');
  const [inputValue, setInputValue] = useState(examplePost.instagram);

  const handleSubmit = () => {
    console.log(`Beitrag für ${platform}: ${inputValue}`);
  };

  const handleExamplePost = () => {
    setInputValue(examplePost[platform]);
  };

  const handleNewPost = () => {
    setInputValue('');
  };

  return (
    <div>
      <select value={platform} onChange={e => {
        setPlatform(e.target.value);
        setInputValue(examplePost[e.target.value]); // Update the input value to the example post when changing platform
      }}>
        <option value="instagram">Instagram</option>
        <option value="tiktok">TikTok</option>
      </select>

      <div className={`preview ${platform}`}>
        <p>{`Vorschau für ${platform}:`}</p>
        <p>{inputValue || 'Kein Beitrag vorhanden.'}</p>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Schreibe einen Beitrag..."
      />

      <button onClick={handleSubmit}>Senden</button>
      <button onClick={handleExamplePost}>Beispielbeitrag zeigen</button>
      <button onClick={handleNewPost}>Neuen Beitrag erstellen</button>

      <style jsx>{`
        .preview {
          border: 1px solid #ddd;
          padding: 20px;
          margin-top: 10px;
        }

        .instagram {
          background-color: #f4f4f4;
        }

        .tiktok {
          background-color: #eee;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaPreview;
