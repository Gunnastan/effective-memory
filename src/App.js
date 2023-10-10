import { useState } from "react";
import "./App.css";
import a from "./assets/a.wav";
import b from "./assets/b.wav";
import c from "./assets/c.wav";
import d from "./assets/d.wav";
import e from "./assets/e.wav";
import f from "./assets/f.wav";
import g from "./assets/g.wav";
import h from "./assets/h.wav";
import i from "./assets/i.wav";

function App() {
  const [id, setId] = useState("");
  const keys = [
    { key: "Q", url: a },
    { key: "W", url: b },
    { key: "E", url: c },
    { key: "A", url: d },
    { key: "S", url: e },
    { key: "D", url: f },
    { key: "Z", url: g },
    { key: "X", url: h },
    { key: "C", url: i },
  ];

  const handleKeyDown = (e) => {
    keys.map((data) => data.key).indexOf(e.key.toUpperCase()) >= 0
      ? playAudio(e.key.toUpperCase())
      : alert("invalid Key Pressed!!");
  };

  const handleClick = (e) => {
    playAudio(e.target.innerText);
  };

  const playAudio = (keyChar) => {
    setId(keyChar);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    document
      .getElementById(keyChar)
      .setAttribute("style", `background-color: rgb(${r},${g},${b})`);

    document
      .getElementsByClassName("clip")
      [keys.map((data) => data.key).indexOf(keyChar)].play();
  };

  const buttons = keys.map((data, i) => (
    <div
      className="drum-pad"
      id={data.key}
      onClick={handleClick}
      key={i}
      value={data.key}
    >
      {data.key}
      <audio className="clip" id={data.key} src={data.url}></audio>
    </div>
  ));

  const randomPlay = () => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        playAudio(keys[Math.floor(Math.random() * 9)].key);
      }, i * 170);
    }
  };
  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>DRUM PAD</h1>
      <h1 id="display">what pad to play: {id}</h1>
      <div id="drum-machine">{buttons}</div>
      <button className="btn btn-success" onClick={randomPlay}>
        {" "}
        Random Play
      </button>
    </div>
  );
}

export default App;
