import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useGlobalContext } from './context'

const Notifications = () => {

    const { state } = useGlobalContext();
    const [ show, setShow ] = useState(false);

    useEffect( () => {

        if ( state.notification ) {

            setShow( true );

            const timer = setInterval( 
                () => setShow( false ), 
                5000 
            )

            return ( () => {
                clearInterval(timer)
            } )
        }

    }, [state.notification])

    return (
        <div>
            { show &&
            <Alert variant="primary">{ state.notification }</Alert>
            }
        </div>
    )
}

export default Notifications