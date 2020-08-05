import React from 'react';


class EventComponent extends React.Component {

  constructor(props) {
    super(props);

    // This line provide 'this' in 'handleClick' function, without this line, 'this' will be undefined
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('button1' + this);
    this.setState({ new: 'new' });
  }

  // We can use arrrow function in callback, it's work, but is experimental
  handleClick2 = () => {
    console.log('button2' + this);
  }

  handleClick3(){
    console.log('button3' + this);
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Click Here</button>
      <button onClick={this.handleClick2}>Click Here2</button>

      {/* We can use arrow '() => this.handle click' function to vincule 'this' but
          arrow function causes one execution create a different callback by call */}
      <button onClick={() => this.handleClick3()}>Click Here3</button>
      </>
    )
  }
}

const Events = () => <EventComponent></EventComponent>;

export default Events;