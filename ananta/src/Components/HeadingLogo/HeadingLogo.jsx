import React, { useRef, useState, useEffect  } from 'react';
import "./HeadingLogo.scss";

// IMPORT COMPONENT
import Heading from "../Heading/Heading";

const HeadingLogo = (props) => {
    const path = window.location.pathname;
    const [domain, setDomain] = useState();
    
    useEffect(() => {
        setDomain(path.substring(8));
    }, []);
    
    let lagu1 = props.lagu
    let lagu = new Audio(lagu1);
    lagu.volume = 0.3;

    return (
        <>
            <div className="heading">
                <img className="logo" onClick={() => lagu.play() } src={props.img} alt="" />
                <Heading nama={props.nama} job={props.job} />
            </div>
        </>
    )
}

export default HeadingLogo;