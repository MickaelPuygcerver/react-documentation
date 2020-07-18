import React from 'react';

// We can split a component multiples times, in some small parts
function Order(props) {
    return (
      <div>Order ID: {props.id}
        <Address city="São Paulo" />
      </div>
    );
}

function Address(props){
    return(
      <div>Cidade {props.city}</div>
    )
}

const SplitComponent = () => <Order id="07" />;

export default SplitComponent;