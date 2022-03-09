import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button key={option} type="button" onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.substring(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
