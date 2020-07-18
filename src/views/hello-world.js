import React from 'react';

const myName = 'Mickael';

function getGreeting(name) {
  if(name)
    return (
      <div>
        <h2>Hello {name}!</h2>
        <h3>2 + 2 = {2 + 2}</h3>
      </div>
    );

  return <h2>Hello Stranger! 2 + 2 = {2 + 2}</h2>;
}

function HelloWorld(){
    return getGreeting(myName);
}

export default HelloWorld;
