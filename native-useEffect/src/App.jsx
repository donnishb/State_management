import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        return t + 1;
      });
    }, 1000);
    return ;
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => {console.log(response)
       return response.json()})
      .then((data) =>{ console.log();
        return setNames(data)});
      
  }, []); 

  const [seletedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => {console.log(response)
        return response.json()})
      .then((data) => setSelectedNameDetails(data));
      console.log(seletedNameDetails)
  };
 console.log(seletedNameDetails);

  return (
    <div>
      <Stopwatch />
      <div>
        {names.map((name) => (
          <button key={name}onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{
      JSON.stringify(seletedNameDetails)}</div>
      <div>{[2,3,5]}</div>
    </div>
  );
      }
export default App;
