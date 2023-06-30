import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const { name, returnPage } = props;
  return (
    <div className={styles.navbar} data-testid="header">
      {returnPage && (
      <Link to="/">
        <IoIosArrowBack className={styles.iconBack} />
      </Link>
      )}
      <div className={styles.brand}>
        <h1>{name}</h1>
      </div>
      <Row className={styles.settings}>
        <div>
          <IoMdSettings size={25} />
        </div>
      </Row>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
  returnPage: PropTypes.bool,
}.isRequired;

export default Navbar;
