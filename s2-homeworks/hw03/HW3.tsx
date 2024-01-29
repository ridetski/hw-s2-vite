import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
// types
export type UserType = {
    _id: any // need to fix any
    name: any // need to fix any
}

export const pureAddUserCallback = (name: any, setUsers: any, users: any) => { // need to fix any
    const user = { // need to fix
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
