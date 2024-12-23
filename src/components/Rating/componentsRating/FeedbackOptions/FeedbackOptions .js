import Section from "../Section/Section";

function FeedbackOptions({ addGood, addNeutral, addBad }) {
  return (
    <Section
      title="Please leave feedback"
      children={
        <>
          <button onClick={addGood}>Good</button>
          <button onClick={addNeutral}>Neutral</button>
          <button onClick={addBad}>Negative</button>
        </>
      }
    />
  );
}

export default FeedbackOptions;
