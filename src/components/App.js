import { Component } from 'react';
import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          date: '2019-11-16',
          resort: 'Squaw Valley',
          powder: true,
          backcountry: false,
        },
        {
          date: '2019-11-30',
          resort: 'Diamond Peak',
          powder: true,
          backcountry: false,
        },
        {
          date: '2019-12-07',
          resort: 'Heavenly',
          powder: false,
          backcountry: true,
        },
        {
          date: '2019-12-14',
          resort: 'Sugar Bowl',
          powder: true,
          backcountry: false,
        },
        {
          date: '2019-12-21',
          resort: 'Kirkwood',
          powder: false,
          backcountry: true,
        },
      ],
    };
    this.addDay = this.addDay.bind(this);
    this.countDays = this.countDays.bind(this);
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [...this.state.allSkiDays, newDay],
    });
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter((day) => (filter ? day[filter] : day)).length;
  }

  render() {
    return (
      <div className="app">
        <Menu />
        {this.props.location.pathname === '/' ? (
          <SkiDayCount
            total={this.countDays()}
            powder={this.countDays('powder')}
            backcountry={this.countDays('backcountry')}
          />
        ) : this.props.location.pathname === '/add-day' ? (
          <AddDayForm onNewDay={this.addDay} />
        ) : (
          <SkiDayList
            days={this.state.allSkiDays}
            filter={this.props.match.params.filter}
          />
        )}
      </div>
    );
  }
}
