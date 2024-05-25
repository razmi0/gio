import { useEffect, useState } from "react";
import Button from "./components/Button";
import { lorem } from "./components/Lorem.ts";
import Section from "./components/Section";

function App() {
  const [text, setText] = useState("");

  const fetchData = async () => {
    const loremText = await lorem({ sentence: 5 });
    setText(loremText);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Section className="flex items-center justify-around">
        <div className="flex flex-col gap-5 items-start justify-center max-w-[50ch] container">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-neutral-800">
              👋 My name is <span className="text-fuchsia-500">Giovanna</span>
            </h1>
            <div className="h-[2px] bg-fuchsia-500 w-[35%]"></div>
          </div>
          <h2 className="text-lg text-neutral-600 font-sans">Marketing digital</h2>
          <p className="text-neutral-700 text-left text-balance">
            Soy una apasionada del marketing digital y la programación. Me encanta aprender cosas nuevas y compartir
            conocimientos con los demás.
          </p>
          <p className="text-neutral-700 text-left text-balance">{text}</p>
          <Button onClick={() => alert("Hola")}>Contactar</Button>
        </div>
        <figure className="relative h-fit w-fit group rounded-full ring-1 ring-neutral-300 ring-offset-2 ">
          <img
            className="rounded-full group-hover:scale-105 group-hover:brightness-105 transition-all aspect-square max-h-[400px]"
            src="./gio.jpeg"
            alt="soy yo giovanna"
          />
        </figure>
      </Section>
      <div className="w-full h-20 bg-fuchsia-500"></div>
      <Section></Section>
    </>
  );
}

export default App;
