import React, { useState } from 'react';
import Image from './Image111.jpeg';
import Image3 from './Image112.webp';
import Image4 from './image16.jpeg';
import Image5 from './Image113.jpeg';
import Image6 from './Image03.jpeg';

export default function Enter() {
  const [items, setItems] = useState([
    { text: 'The Crown', checked: false },
    { text: 'The Crown', checked: false },
    { text: 'Weak Hero', checked: false },
  ]);
  const [itemsRight, setItemsRight] = useState([
    { text: 'Mindhunter', checked: false },
    { text: 'Dark', checked: true },
    { text: 'Money Heist', checked: false },
    { text: 'The Outsider', checked: true },
    { text: 'The Fall', checked: false },
    { text: 'You', checked: false },
  ]);
  const [itemsRight2, setItemsRight2] = useState([
    { text: 'The Royals', checked: false },
    { text: 'Strangers Things', checked: false },
    { text: 'The witcher', checked: false },
    { text: 'ShadowHunters', checked: true }
  ]);

  const toggleCheckLeft = (index) => {
    const updated = [...items];
    updated[index].checked = !updated[index].checked;
    setItems(updated);
  };

  const toggleCheckRight = (index) => {
    const updated = [...itemsRight];
    updated[index].checked = !updated[index].checked;
    setItemsRight(updated);
  };

  const toggleCheckRight2 = (index) => {
    const updated = [...itemsRight2];
    updated[index].checked = !updated[index].checked;
    setItemsRight2(updated);
  };

  const handleTextChangeLeft = (index, newText) => {
    const updated = [...items];
    updated[index].text = newText;
    setItems(updated);
  };

  const handleTextChangeRight = (index, newText) => {
    const updated = [...itemsRight];
    updated[index].text = newText;
    setItemsRight(updated);
  };

  const handleTextChangeRight2 = (index, newText) => {
    const updated = [...itemsRight2];
    updated[index].text = newText;
    setItemsRight2(updated);
  };

  const addItemLeft = () => {
    setItems([...items, { text: 'New Show', checked: false }]);
  };

  const addItemRight = () => {
    setItemsRight([...itemsRight, { text: 'New Show', checked: false }]);
  };

  const addItemRight2 = () => {
    setItemsRight2([...itemsRight2, { text: 'New Show', checked: false }]);
  };

  return (
    <div>
      <img src={Image} style={{ width: '177vh', height: '29vh' }} alt="banner" />
      <img
        src={Image3}
        alt="Netflix logo"
        style={{ top: '20vh', position: 'absolute', left: '20px', height: '15vh', width: '14vh' }}
      />
      <h2
        style={{
          textAlign: 'center',
          border: '0.9vh solid red',
          padding: '10px',
          width: 'fit-content',
          margin: '20px auto',
        }}
      >
        Wanna Have Ramen at My Place
      </h2>

      <div style={{ display: 'flex', position: 'relative' }}>
        {/* Left Column */}
        <div style={{ width: '33%', paddingRight: '20px' }}>
          <img src={Image4} alt="Netflix poster" style={{ height: '35vh', width: '100%', objectFit: 'contain' }} />
          
          <div style={{ marginTop: '20px' }}>
            {items.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheckLeft(index)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '8px' }}
                />
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextChangeLeft(index, e.target.innerText)}
                  style={{
                    color: 'white',
                    textDecoration: item.checked ? 'line-through' : 'none',
                    padding: '3px 2px',
                    flexGrow: 1,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    caretColor: 'rgba(255, 255, 255, 0.81)',
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <button
              onClick={addItemLeft}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: '#e50914',
                color: 'white',
                width: '10vh',
              }}
            >
              + Add Show
            </button>
          </div>
        </div>

        {/* Middle Column */}
        <div style={{ width: '33%', padding: '0 20px' }}>
          <div>
            {itemsRight.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheckRight(index)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '8px' }}
                />
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextChangeRight(index, e.target.innerText)}
                  style={{
                    color: 'white',
                    textDecoration: item.checked ? 'line-through' : 'none',
                    padding: '3px 2px',
                    flexGrow: 1,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    caretColor: 'rgba(255, 255, 255, 0.81)',
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <button
              onClick={addItemRight}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: '#e50914',
                color: 'white',
                width: '10vh',
              }}
            >
              + Add Show
            </button>
          </div>
          
          <img src={Image5} style={{ height: '35vh', width: '100%', objectFit: 'contain', marginTop: '5vh' }} />
        </div>

        {/* Right Column */}
        <div style={{ width: '33%', paddingLeft: '20px' }}>
          <img src={Image6} alt="Netflix poster" style={{ height: '35vh', width: '100%', objectFit: 'contain' }} />
          
          <div style={{ marginTop: '20px' }}>
            {itemsRight2.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheckRight2(index)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', marginRight: '8px' }}
                />
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextChangeRight2(index, e.target.innerText)}
                  style={{
                    color: 'white',
                    textDecoration: item.checked ? 'line-through' : 'none',
                    padding: '3px 2px',
                    flexGrow: 1,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    caretColor: 'rgba(255, 255, 255, 0.81)',
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <button
              onClick={addItemRight2}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: '#e50914',
                color: 'white',
                width: '10vh',
              }}
            >
              + Add Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}