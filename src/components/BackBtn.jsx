import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = () => {
    return (
        <Link to="/ben-tucker">
            <div className="back-btn">
                <div className="arrow">
                    <span className="arrow-wing"></span>
                </div>
                <p>BACK</p>
            </div>
        </Link>
    )
}

export default BackBtn