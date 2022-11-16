import { Card, Col, Input, Button } from 'antd';
import './Search.css';
import React, { useState } from "react"
import { OmitProps } from 'antd/lib/transfer/ListBody';

function Search(props) {
    const [name, setName] = useState("")
    
    const titleChangeHandler = (event) => {
        setName(event.target.value)
        props.onSearchData(event.target.value)
    }
    
    
    return (
        <Col className='inputSearch'>
            <h1><strong>Search</strong></h1>
            <div>
                <h4>Search</h4>
                <Input type='text' onChange={titleChangeHandler}/>
            </div>
        </Col>
    )
}

export default Search