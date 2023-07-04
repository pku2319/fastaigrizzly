import React, { useEffect } from 'react'
import { client } from "@gradio/client"

async function run() {

  const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
  const exampleImage = await response_0.blob();

  const app = await client("https://singularnostalgia-grizzle.hf.space/");
  const result = await app.predict("/predict", [
    exampleImage, 	// blob in 'img' Image component
  ]);

  console.log(result?.data);
}

function App() {
  useEffect(() => {
    run()
  }, [])

  return (
    <div>
      <h1>Welcome to Some Grizzly Demo</h1>
      <p>This is a static React site hosted on GitHub Pages.</p>
    </div>
  );
}

export default App