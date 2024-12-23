import Section from "../Section/Section";

function Notification({message}) {

    return (
      <Section title="Statistic" children={<p>{message}</p>}/>
    )
  }


export default Notification;
