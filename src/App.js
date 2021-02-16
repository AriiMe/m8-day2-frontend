import React from "react";
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from "./components/LoginComponent"
import TextTransition, { presets } from "react-text-transition";
import '../node_modules/bulma/css/bulma.min.css'
import 'bulma/css/bulma.css';
import "./App.css"
const TEXTS = [
  "G'Day Cunt",
  "Cunt",
  "Yeet",
  "Yo mama",
  "A suh dude",
  "Abdul best Mommy",
  "want sum Pecc?"
];

const App = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <h1 id="cunt">
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </h1>
      <LoginComponent />
    </>
  );
};

export default App;
