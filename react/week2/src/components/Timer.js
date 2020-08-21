import React, { Component } from 'react'


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>You have used: {count} seconds </h1>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Timer;
