import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import QuestionHud from './Components/QuestionHud';

function App() {
  const [gameStart, setGameStart] = useState(false);
  
  
  if (gameStart === true) {
  return (
    <div className="App">
      <Header />
      <div class="question-component">
        <QuestionHud />
      </div>
    </div>
  );
  } else
      return (
      <>
      <Header />
        <div class="welcome-msg">
          <div class="welcome-msg-content">
            <h1>Welcome to Nate's Gaming Quiz</h1>
            <strong>Click or tap the button below to start the quiz</strong>
            <div class="button" onClick={() => setGameStart(true)}>
                <h3>Start</h3>
            </div>
            </div>
        </div>
      </>
      );
}

export default App;
