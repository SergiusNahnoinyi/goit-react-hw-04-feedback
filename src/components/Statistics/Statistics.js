import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className="statistics-container">
      <ul className={s.list}>
        <li key="Good" className="item">
          Good: {good}
        </li>
        <li key="Neutral" className="item">
          Neutral: {neutral}
        </li>
        <li key="Bad" className="item">
          Bad: {bad}
        </li>
      </ul>

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number,
};
