import { Component } from 'react';
import PropTypes from 'prop-types';

const tahoeResorts = [
  'Alpine Meadows',
  'Boreal',
  'Diamond Peak',
  'Donner Ski Ranch',
  'Heavenly',
  'Homewood',
  'Kirkwood',
  'Mt. Rose',
  'Northstar',
  'Squaw Valley',
  'Sugar Bowl',
];

const today = new Date();

const todayStr =
  today.getFullYear() +
  '-' +
  ('0' + (today.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + today.getDate()).slice(-2);

class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value;
  }

  set value(inputValue) {
    this.refs.inputResort.value = inputValue;
  }

  render() {
    return (
      <div>
        <input ref="inputResort" type="text" list="tahoe-resorts" />
        <datalist id="tahoe-resorts">
          {this.props.options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </datalist>
      </div>
    );
  }
}

export const AddDayForm = ({ date, powder, backcountry, onNewDay }) => {
  let _resort, _date, _powder, _backcountry;

  const submit = (e) => {
    e.preventDefault();
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked,
    });
    _date.value = todayStr;
    _resort.value = '';
    _powder.checked = false;
    _backcountry.checked = false;
  };

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        required
        defaultValue={date}
        ref={(input) => (_date = input)}
      />

      <label htmlFor="resort">Resort</label>
      <Autocomplete options={tahoeResorts} ref={(input) => (_resort = input)} />

      <div className="powder-day">
        <input
          id="powder"
          type="checkbox"
          defaultChecked={powder}
          ref="powder"
          ref={(input) => (_powder = input)}
        />
        <label htmlFor="powder">Powder Day</label>
      </div>

      <div className="backcountry-day">
        <input
          id="backcountry"
          type="checkbox"
          defaultChecked={backcountry}
          ref="backcountry"
          ref={(input) => (_backcountry = input)}
        />
        <label htmlFor="backcountry">Backcountry Day</label>
      </div>
      <button>Add Day</button>
    </form>
  );
};

AddDayForm.defaultProps = {
  date: todayStr,
  resort: '',
  powder: false,
  backcountry: false,
};

AddDayForm.propTypes = {
  date: PropTypes.string.isRequired,
  resort: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired,
};
