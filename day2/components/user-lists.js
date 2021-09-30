import React from 'react'
import {Row} from 'react-bootstrap'
import UserItem from './user-item'

export default function UserLists({data}) {
    return (
        <>
            {/* {users.map(user=>( */}
                <UserItem user={data} key={data.id} />
            {/* ))} */}
        </>
    )
}