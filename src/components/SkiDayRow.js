import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import PropTypes from 'prop-types';

export const SkiDayRow = ({ date, resort, powder, backcountry }) => (
  <tr>
    <td>{date}</td>
    <td>{resort}</td>
    <td>{powder ? <TiWeatherSnow /> : null}</td>
    <td>{backcountry ? <MdTerrain /> : null}</td>
  </tr>
);

SkiDayRow.propTypes = {
  date: PropTypes.string.isRequired,
  resort: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool,
};
