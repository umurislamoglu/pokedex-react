import React from 'react'

const Ability = ({ability}) => {
    return (
        <li className="list-group-item list-group-item-success text-capitalize fs-5 mt-2 rounded-pill border d-flex justify-content-center">
            {ability}
        </li>
    )
}

export default Ability
