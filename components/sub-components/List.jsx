import React from 'react'

function List({ id, ns_number, name, time}) {
    return (
        <tr className='text-center'>
            <th>{id}</th>
            <td>{ns_number}</td>
            <td>{name}</td>
            <td>{time}</td>
        </tr>
    )
}

export default List