import Section from "../Section/Section";
import Notification from "../Notification/Notification";

function Statistic({good, neutral, bad, total, positivePercentage, goodRef, neutralRef, badRef}) {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <Section title="Statistics">
        <div>
          <p ref={goodRef}>
            Good: <span>{good}</span>
          </p>
          <p ref={neutralRef}>
            Neutral: <span>{neutral}</span>
          </p>
          <p ref={badRef}>
            Negative: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total}</span>
          </p>
          <p>
            Positive feedback: <span>{positivePercentage}</span>
          </p>
        </div>
      </Section>
    )
  } else {
    return <Notification message="There is no feedback" />;
  }
}

export default Statistic;
