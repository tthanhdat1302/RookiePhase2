import React from 'react'
import '../../css/fragments_css/header.css'

export default function Header(props) {
    return (
        <div id="header">
            <label>{props.page}</label>
        </div>
    )
}
