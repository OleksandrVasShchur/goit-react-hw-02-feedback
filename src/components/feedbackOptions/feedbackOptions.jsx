import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
   
    return (
        <div className={css.buttonBox}>
            {options.map(option => (
                <div  key={option}>
                    <button className={css.buttonStyle} name={option} type="button" onClick={onLeaveFeedback}>
                        {option}
                    </button>
                </div>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
