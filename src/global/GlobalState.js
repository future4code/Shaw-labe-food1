import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import useRequestData from '../hooks/useRequestData'

export default function GlobalState(props) {
    return(
        <GlobalContext.Provider>
            {props.children}
        </GlobalContext.Provider>
    )
}