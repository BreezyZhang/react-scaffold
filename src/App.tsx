import React from 'react';

interface IProperties {
  name: string;
}

function App(properties: IProperties) {
  const { name } = properties;
  return (
    <div className="app">
      <span>{`Hello world, I am ${name}`}</span>
    </div>
  );
}

export default App;
