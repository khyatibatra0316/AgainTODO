import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase.jsx'; 

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const submitted = localStorage.getItem(`formSubmitted_${currentUser.uid}`);
        if (submitted === 'true') {
          setAlreadySubmitted(true);
          // ⛳ Navigate after a short delay to let React mount first
          setTimeout(() => {
            navigate('/main');
          }, 100); 
        }
      } else {
        navigate('/'); // not logged in
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      localStorage.setItem(`formSubmitted_${user.uid}`, 'true');
    }
    navigate('/main');
  };

  // Optional: If you still want to show a message before redirect:
  if (alreadySubmitted) {
    return <p>✅ You have already submitted this form. Redirecting...</p>;
  }

  return (
    <div className="home-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div>
            <h4>1. What is your name?</h4>
            <input type="text" placeholder="Name" required />
          </div>
          <div>
            <h4>2. What's your age?</h4>
            <input type="number" min="15" max="100" placeholder="Enter your age" required />
          </div>
          <div>
            <h4>3. What is the main thing you want to achieve with this site?</h4>
            <input placeholder="Write your answer" type="text" required />
          </div>
          <div>
            <h4>4. How do you usually organize your task?</h4>
            <input placeholder="Write here" type="text" required />
          </div>
          <div>
            <h4>5. How are you planning to use this site?</h4>
            <input type="text" placeholder="Write here" required />
          </div>
          <div>
            <h4>6. Do you prefer setting daily goals, weekly goals, or flexible plans?</h4>
            <input type="radio" id="yes" name="goal" value="yes" required />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="goal" value="no" required />
            <label htmlFor="no">No</label>
          </div>
          <div>
            <h4>7. Would you like to integrate with your Google Calendar?</h4>
            <input type="radio" id="yes2" name="calendar" value="yes" required />
            <label htmlFor="yes2">Yes</label>
            <input type="radio" id="no2" name="calendar" value="no" required />
            <label htmlFor="no2">No</label>
          </div>
          <div style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button>Start Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
