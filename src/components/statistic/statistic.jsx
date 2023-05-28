import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  const statArray = [
    { statElem: good, title: 'Good' },
    { statElem: neutral, title: 'Neutral' },
    { statElem: bad, title: 'Bad' },
    { statElem: total, title: 'Total feedbacks' },
    { statElem: positiveFeedback, title: 'positiveFeedback' },
  ];

  return (
    <div>
      {statArray.map(({ statElem, title }) => (
        <div key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive feedbacks'
                ? statElem
                : positiveFeedback + '%'}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistic;
