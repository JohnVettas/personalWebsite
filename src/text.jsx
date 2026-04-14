import { useState, useEffect } from 'react'; // 1. Import the hooks

export function StartUp() {
  // 2. State to hold the letters as they are "typed"
  const [displayedText, setDisplayedText] = useState(""); 
  
  // The full message we want to type out. \n creates a line break.
  const fullText = "Welcome to my personal website\nPlease press 'Enter' to start...";

  // 3. The useEffect hook runs automatically when the component loads
  useEffect(() => {
    let currentIndex = 0;

    // Set up an interval that runs every 50 milliseconds
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        // Slice takes a portion of the string from 0 up to our current index
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        // Once the whole string is typed, stop the timer
        clearInterval(typingInterval);
      }
    }, 25); // Adjust this number to type faster or slower!

    // Cleanup: If the component unmounts before finishing, stop the timer
    return () => clearInterval(typingInterval);
  }, []); // The empty brackets [] mean "only run this exactly once on load"

  return (
    <>
      {/* whiteSpace: 'pre-line' allows the \n in our string to act as an actual line break */}
      <p className="mainText" style={{ whiteSpace: 'pre-line' }}>
        {displayedText}
      </p>
    </>
  )
}