import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../stylesheets/ProgressBar.sass'

const BProgressBar = ({percent}) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        setValue(percent);
    }, [percent]);
    
    return (
        <React.Fragment>
          <ProgressBar className="b-progress-bar" now={value} />
        </React.Fragment>
    );
};

BProgressBar.propTypes = {
    percent: PropTypes.string
};

export default BProgressBar;