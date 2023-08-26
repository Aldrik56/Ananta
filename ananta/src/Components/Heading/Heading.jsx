import React, { useRef, useState, useEffect  } from 'react';
import "./Heading.scss";

const Heading = (props) => {
    return (
        <>
            <div className="judul">
                <p className="nama">{props.nama}</p>
                <p className="job" style={props.style}>{props.job}</p>
            </div>
        </>
    )
}

export default Heading;