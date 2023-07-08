import React from 'react';
import PropTypes from 'prop-types';
import styles from './country.module.css';

const Country = ({ country, detailed }) => {
  const { name, population, flags } = country;

  return (
    <div className={styles.card}>
      <div className={styles.descpDiv}>
        {flags && flags.svg && (
          <img className={styles.flag} src={flags.svg} alt={`${name} Country Images`} />
        )}

        <div className={styles.descp}>
          <h4>{name}</h4>
          {detailed && (
          <p>
            Population:
            {population}
          </p>
          )}
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  detailed: PropTypes.bool,
};

Country.defaultProps = {
  detailed: false,
};
export default Country;
