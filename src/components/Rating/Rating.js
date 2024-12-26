import { useState, useRef, useEffect, createContext } from "react";
import React from "react";

import FeedbackOptions from "./componentsRating/FeedbackOptions/FeedbackOptions ";
import Statistic from "./componentsRating/Statistic/Statistic";
export const TextContext = createContext()

function Rating() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setGoodbad] = useState(0);

  const goodRef = useRef()
  const neutralRef = useRef()
  const badRef = useRef()

  const [text, useText] = useState("Please leave feedback")

  useEffect(()=> {
    if (good !== 0) {
      goodRef.current.style.color = "green"
      neutralRef.current.style.color = "black"
      badRef.current.style.color = "black"
    }
    
  }, [good])

  useEffect(()=> {
    if (neutral !== 0) {
      neutralRef.current.style.color = "orange"
      goodRef.current.style.color = "black"
      badRef.current.style.color = "black"
    }
    
  }, [neutral])

  useEffect(()=> {
    if (bad !== 0) {
      badRef.current.style.color = "red"
      goodRef.current.style.color = "black"
      neutralRef.current.style.color = "black"
    }
    
  }, [bad])



  const goodRating = () => {
    setGood(good + 1);
  };

  const neutralRating = () => {
    setNeutral(neutral + 1);
  };

  const badRating = () => {
    setGoodbad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    return (
      Number.parseInt((Number.parseInt(good) * 100) / Number.parseInt(total)) +
      "%"
    );
  };

  return (
    <>
      <TextContext.Provider value={text}>
        <FeedbackOptions
          addGood={goodRating}
          addNeutral={neutralRating}
          addBad={badRating}
        />
      </TextContext.Provider>

      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        goodRef={goodRef}
        neutralRef={neutralRef}
        badRef={badRef}
      />
    </>
  );
}

export default Rating;
