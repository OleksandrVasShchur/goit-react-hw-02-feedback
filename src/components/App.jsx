import React, { Component } from 'react';

import Statistic from './statistic/statistic';
import Section from './section/section';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Notification from './notification/notification';
import css from './style-app/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, volume) => (total += volume),
      0
    );
  };

  countPositiveFeedback = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) {
      return Math.round((good / totalFeedback) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedback(totalFeedback);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
