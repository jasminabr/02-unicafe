import { useState } from "react";

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    console.log("Good increased by", good);
    setGood(good + 1);
    setTotal(good + 1 + neutral + bad);
  };
  const handleNeutralClick = () => {
    console.log("neutral was clicked", neutral);
    setNeutral(neutral + 1);
    setTotal(good + neutral + 1 + bad);
  };

  const handleBadClick = () => {
    console.log("Bad increased by", bad);
    setBad(bad + 1);
    setTotal(good + neutral + bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      {/* <p> Good {good}</p>
      <p> Neutral {neutral}</p>
      <p> Bad {bad}</p>
      <p> All {total}</p> */}

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
