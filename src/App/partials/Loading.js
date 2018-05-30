import React from 'react';

import loading from "../../assets/img/loading.gif"

const Loading = () => {

    return (
        <div className="row loading">
            <div className="col s4 offset-s4">
                <img className="center" src={loading} alt="loading" />
            </div>
            <div className="col s6 offset-s4">
                <h3>collecting data</h3>
            </div>
        </div>
    )
};

export default Loading;