import Section from "../Section/Section";
import { TextContext } from "../../Rating";
import { useContext } from "react";

function FeedbackOptions({ addGood, addNeutral, addBad }) {
  const text = useContext(TextContext)
  return (
    <Section
      title={text}
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
