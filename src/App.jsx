import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './Clock';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component{
  constructor (props) {
    super(props);
    const INI_DEADLINE = 'December 25, 2017';

    this._deadline = moment(INI_DEADLINE);

    this.state = {
      deadline: this._deadline,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    //console.log(date);

    this.setState({
      deadline: date
    });
  }

  render() {
    return (

      <div className="panel panel-primary App">
        <div className="panel-heading">Countdown App</div>
        <div className="panel-body">
          <div className="App-title">Countdown to <span className="label label-success">{this.state.deadline.format("MMMM DD, YYYY")}</span></div>

          <Clock clockdeadline={this.state.deadline}/>

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