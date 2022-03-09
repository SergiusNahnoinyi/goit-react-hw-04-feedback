import { useState, useEffect } from 'react';
import './App.css';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentage(Math.round((good * 100) / total));
  }, [good, neutral, bad, total]);

  const handleClick = event => {
    switch (event.target.textContent) {
      case 'Good':
        setGood(good => good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'Bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </div>
  );
}
