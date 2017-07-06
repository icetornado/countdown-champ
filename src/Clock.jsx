import React, {Component} from 'react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);

    this.state = {
      cnDays: 0,
      cnHours: 0,
      cnMinutes: 0,
      cnSeconds: 0,
    };
  }

  getTimeUntil(deadline) {
    const now = new Date();
    const dura = moment.duration(deadline.valueOf() - now.valueOf());

    this.setState({
      cnDays: Math.floor(dura.asDays()),
      cnHours: dura.hours(),
      cnMinutes: dura.minutes(),
      cnSeconds: dura.seconds()
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