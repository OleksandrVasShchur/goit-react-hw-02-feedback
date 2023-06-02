import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;
