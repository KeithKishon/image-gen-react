import React, { useState, useEffect } from 'react';
import './App.css'; 
import img1 from "./assets/images/output_0.jpg"; 
import img2 from "./assets/images/output_1.jpg"; 
import img3 from "./assets/images/output_2.jpg"; 
import img4 from "./assets/images/output_3.jpg"; 
import img5 from "./assets/images/output_4.jpg"; 

function App() {
  const [storygensIndex, setStorygensIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [audioUrls, setAudioUrls] = useState([]);
  const [selectedAudioIndex, setSelectedAudioIndex] = useState(0); // Track the selected audio index

  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStorygensIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex % images.length; // Ensure nextIndex wraps around images.length
      });
    }, 900000); // Adjusted interval to 9000 milliseconds (9 seconds)

    // Set loading to false after 9 seconds
    // setTimeout(() => {
      setLoading(false);
    // }, 9000);

    return () => clearInterval(intervalId);
  }, [images.length]); // Removed images.length from the dependency array as it's not needed here

  useEffect(() => {
    const fetchAudioUrls = async () => {
      console.log("Fetching...");
      try {
        const response = await fetch("http://localhost:8000/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        console.log("Fetch complete");
        
        const data = await response.json();
        console.log('Fetched audio URLs:', data);
        setAudioUrls(data.message); // Update this line to set the audio URLs from the data
      } catch (error) {
        console.error('Error fetching audio URLs:', error);
      }
    };

    fetchAudioUrls();
  }, []);

  useEffect(() => {
    // Generate a random index within the range of available audio URLs
    const randomIndex = Math.floor(Math.random() * audioUrls.length);
    setSelectedAudioIndex(randomIndex);
  }, [audioUrls]);

  // Get the selected audio URL
  const selectedAudioUrl = audioUrls.length > 0 ? audioUrls[selectedAudioIndex].audio_url : '';

  return (
    <div className="App">
      <h1>My React Component</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Storygens:</h2>
          <ul>
            <li>
              <img src={images[storygensIndex]} alt={`My Image ${storygensIndex + 1}`} /> 
            </li>
          </ul>
          <audio className="audio-player-styles" src={selectedAudioUrl} id="audio-player" controls={true} autoPlay />
        </div>
      )}
    </div>
  );
}

export default App;
