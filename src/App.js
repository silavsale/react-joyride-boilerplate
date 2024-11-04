import React from 'react';
import ReactJoyride from 'react-joyride';

function App() {
  // Define your tour steps
  const steps = [
    {
      target: '.step-1',
      content: 'Welcome to the first step!',
    },
    {
      target: '.step-2',
      content: 'This is the second step.',
    },
    {
      target: '.step-3',
      content: 'Finally, this is the third step.',
    },
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <ReactJoyride
        steps={steps}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
      />
      
      <h1 className="step-1">Step 1: Welcome!</h1>
      <p className="step-2">Step 2: Here is some information.</p>
      <button className="step-3">Step 3: Click me!</button>
    </div>
  );
}

export default App;
