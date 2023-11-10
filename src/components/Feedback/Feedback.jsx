import PropTypes from 'prop-types'
import { Button } from './ButtonsFeedback.styled';

export const Feedback = ( options, onLeaveFeedback ) => {
  return (
    <Button>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </Button>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired
}