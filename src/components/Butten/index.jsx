import React from 'react'
import Style from './style.module.css'

function Butten({ data, func }) {
    return (
        <div>
            <button className={Style.all} onClick={func} style={{ width: "100%" }}>{data}</button>
        </div>
    )
}

export default Butten
