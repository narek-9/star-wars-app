import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  return (
    <>
      <div>
        <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
          <button
            disabled={!prevPage}
            onClick={handleChangePrev}
            className={styles.buttons}
          >
            Previous
          </button>
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
          <button
            disabled={!nextPage}
            onClick={handleChangeNext}
            className={styles.buttons}
          >
            Next
          </button>
        </Link>
      </div>
      <h1 className="header__text">Navigation</h1>
    </>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
