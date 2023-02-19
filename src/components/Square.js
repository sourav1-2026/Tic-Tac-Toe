// import { useState } from 'react';
import './Square.css'
function Square({value,onClick}){

    // const [mark,setmark]=useState('')

    function handleclick(){
        onClick(value)
    }

    return (
        <>
        <button className= "square" onClick={handleclick} >{value}</button>    
        </>
    )
};

export default Square;