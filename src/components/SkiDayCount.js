import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaRegCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const percentToDecimal = (decimal) => (decimal * 100).toFixed(1) + '%';

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal);

export const SkiDayCount = ({
  total = 10,
  powder = 20,
  backcountry = 10,
  goal = 50,
}) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}&nbsp;</span>
      <FaRegCalendarAlt />
      <span>&nbsp;day{total > 1 ? 's' : ''}</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <TiWeatherSnow />
      <span>&nbsp;day{powder > 1 ? 's' : ''}</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}&nbsp;</span>
      <MdTerrain />
      <span>&nbsp;day{backcountry > 1 ? 's' : ''}</span>
    </div>
    <div className="goal-completed">
      <span>{calcGoalProgress(total, goal)}</span>
      <span>&nbsp;goal completed</span>
    </div>
  </div>
);

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number,
};
