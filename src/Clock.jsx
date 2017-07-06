import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    console.log(props.clockdeadline);

    this.state = {
      cnDays: 0,
      cnHours: 0,
      cnMinutes: 0,
      cnSeconds: 0,
    };
  }

  getTimeUntil(deadline) {
    const now = new Date();
    const dura = deadline.valueOf() - now.valueOf();

    const days = Math.floor(dura / (24 * 60 * 60 * 1000));
    this.setState({
      cnDays: days,
      cnHours: Math.floor((dura / (60 * 60 * 100)) - days * 24),
      cnMinutes: Math.floor((dura / (60 * 1000)) - days * 24 * 60),
      cnSeconds: Math.floor((dura/1000 - days * 24 * 60 * 60))
    });
  }

  componentWillMount(){
    this.getTimeUntil(this.props.clockdeadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.clockdeadline), 1000);
  }
  render() {

    return (
      <div>
        <div className="Clock-days"><span className="time-digits">{this.state.cnDays}</span> days(s)</div>
        <div className="Clock-hours"><span className="time-digits">{this.state.cnHours}</span> hour(s)</div>
        <div className="Clock-minutes"><span className="time-digits">{this.state.cnMinutes}</span> minute(s)</div>
        <div className="Clock-seconds"><span className="time-digits">{this.state.cnSeconds}</span> second (s)</div>
      </div>
    );
  }
}

export default Clock;