import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { SectionContainer } from './Container/Container';
import { Wrapper } from './Wrapper/Wrapper';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    if (type === good) {
      setGood(good + 1);
    } else if (type === neutral) {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const total = good + neutral + bad;

  const calculateStatistics = () => {
    const positive = parseInt((good / total) * 100);
    if (total > 0) {
      return positive;
    }
    return 0;
  };

  const positivePercentage = calculateStatistics();

  return (
    <Wrapper>
      <SectionContainer title="Give Feedback">
        <Feedback
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionContainer>
      <SectionContainer title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionContainer>
    </Wrapper>
  );
};
