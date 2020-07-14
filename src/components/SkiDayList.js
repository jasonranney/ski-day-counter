import { SkiDayRow } from './SkiDayRow';
import { Link } from 'react-router-dom';

export const SkiDayList = ({ days, filter }) => {
  const filteredDays =
    !filter || !filter.match(/powder|backcountry/)
      ? days
      : days.filter((day) => day[filter]);

  return (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">All Days</Link>
              <Link to="/list-days/powder">Powder Days</Link>
              <Link to="/list-days/backcountry">Backcountry Days</Link>
            </td>
          </tr>
          <tr>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) => (
            <SkiDayRow key={i} {...day} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

SkiDayList.propTypes = {
  days: function (props) {
    if (!Array.isArray(props.days)) {
      return new Error('SkiDayList should be an array');
    } else if (!props.days.length) {
      return new Error('SkiDayList must have at least one record');
    } else {
      return null;
    }
  },
};
