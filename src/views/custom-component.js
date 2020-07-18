import React from 'react';

// This is the most simple way to write a simples react component
// {props} reponsible to receive all properties difined when this component is called
function Welcome(props){
    // Value never change
    const name = 'Mickael';

    // With JSx we can incorpore any js valid expression between {}
    // () is used to prevent automatic ; insertion
    return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
    );
}

// Elements without children can be closed with />
const CustomComponent = () => <Welcome name="Mickael" />;

export default CustomComponent;