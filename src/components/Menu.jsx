import React, { useState } from 'react'
import { BreakfastMenu } from './menuComponents/BreakfastMenu'
import { DayMenu } from './menuComponents/DayMenu'

export const Menu = () => {
    const [breackFast, setBreackfast] = useState(true)
    return (
        <div>
            <>
                <button onClick={() => { setBreackfast(true) }}>Desayuno</button>
                <button onClick={() => { setBreackfast(false) }}>Menú del día</button>
            </>
            {breackFast ? <BreakfastMenu /> : <DayMenu />}
        </div>
    );
}

