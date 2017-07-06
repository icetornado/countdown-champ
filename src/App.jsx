import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component{
  constructor (props) {
    super(props);
    const INI_DEADLINE = 'December 25, 2017';

    this._startDate = moment();
    this._deadline = moment(INI_DEADLINE);
    this._duration = moment.duration(moment(this._deadline).diff(this._startDate));

    this.state = {
      startDate: this._startDate,
      deadline: this._deadline,
      duration: this._duration,
     };


    this.handleChange = this.handleChange.bind(this);

    var durationObj = this.calculateTime(this._deadline);
    var that = this;

    Object.keys(durationObj).forEach(function(key){
      console.log(durationObj[key]);
      that.state[key] = durationObj[key];
    });
  }

  calculateTime(deadline){
    var now = moment();
    var dura = moment.duration(moment(deadline).diff(now));
    var days = Math.floor(dura.asDays());
    var durationObj = {
      cnDays: days,
      cnHours: Math.floor(dura.asHours() - days * 24),
      cnMinutes: Math.floor(dura.asMinutes() - days * 24 * 60),
      cnSeconds: Math.floor(dura.asSeconds() - days * 24 * 60 * 60)
    }

    return durationObj;
  };

  handleChange(date) {
    console.log(date);
    var rightNow = moment();
    var durationObj = this.calculateTime(date);

    this.setState({
      startDate: rightNow,
      deadline: moment(date),
      duration: moment.duration(moment(date).diff(rightNow)),
      cnDays: durationObj.cnDays,
      cnHours: durationObj.cnHours,
      cnMinutes: durationObj.cnMinutes,
      cnSeconds: durationObj.cnSeconds,
    });
  }

  render() {
    return (

      <div className="panel panel-primary App">
        <div className="panel-heading">Countdown App</div>
        <div className="panel-body">
          <div className="App-title">Countdown to <span className="label label-success">{this.state.deadline.format("MMMM DD, YYYY")}</span></div>

          <div>
            <div className="Clock-days"><span className="time-digits">{this.state.cnDays}</span> days(s)</div>
            <div className="Clock-hours"><span className="time-digits">{this.state.cnHours}</span> hour(s)</div>
            <div className="Clock-minutes"><span className="time-digits">{this.state.cnMinutes}</span> minute(s)</div>
            <div className="Clock-seconds"><span className="time-digits">{this.state.cnSeconds}</span> second (s)</div>
          </div>

          <div className="Date-row">
            New deadline:&nbsp;
          </div>
          <DatePicker
            inline
            dateFormat="YYYY/MM/DD"
            selected={this.state.deadline}
            onChange={this.handleChange}
          />
        </div>
      </div>


    );
  }
}

export default App;