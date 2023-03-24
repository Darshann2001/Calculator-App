import React from 'react';
import './Calculator.css';
// import '../Component/asset/button.css'z
import { useState, useEffect } from 'react';

const array = [];

const Calculator = () => {

    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.']

    function inputNum(e) {

        try {

            if (e.target.value === '.' && result.includes('.')) return
            if (ops.includes(e.target.value) && result === '' ||
                ops.includes(e.target.value) && ops.includes(result.slice(-1))
            ) {
                return
            }

            setResult(result + e.target.value)
            array.push(e.target.value)

            console.log(array);

        } catch (error) {
            setResult(result + e.target.value)
        }

    }

    function operation(e) {
        setResult(eval(result))
        var checkifNaN = isNaN(e.target.value);

    }


    function ClearText() {
        setResult('');
    }

    function DeleteText(e) {
        try {
            setResult(result.slice(0, -1));
            array.pop(e.target.value);
            console.log(array);
        } catch (error) {
            setResult('');
        }
    }

    return (
        <div className='container'>
            <div className="wrapper">

                <div className="screen">
                    {result || 0}
                </div>

                <div className="btn-flex">
                    <button value={'7'} color='black' onClick={inputNum} >7</button>
                    <button value={'8'} color='black'
                        onClick={inputNum}>8</button>
                    <button value={'9'} color='black'
                        onClick={inputNum}>9</button>
                    <button value={'/'} color='#f2a33c'
                        onClick={inputNum} >/</button>
                </div>
                <div className="btn-flex">
                    <button value={'4'} color='black'
                        onClick={inputNum} >4</button>
                    <button value={'5'} color='black'
                        onClick={inputNum}>5</button>
                    <button value={'6'} color='black'
                        onClick={inputNum}>6</button>
                    <button value={'*'} color='#f2a33c'
                        onClick={inputNum}>*</button>
                </div>
                <div className="btn-flex">
                    <button value={'1'} color='black'
                        onClick={inputNum}>1</button>
                    <button value={'2'} color='black'
                        onClick={inputNum}>2</button>
                    <button value={'3'} color='black'
                        onClick={inputNum}>3</button>
                    <button value={'+'} color='#f2a33c'
                        onClick={inputNum}>+</button>
                </div>
                <div className="btn-flex">
                    <button value={'0'} color='black'
                        onClick={inputNum}>0</button>
                    <button value={'00'} color='black'
                        onClick={inputNum}>00</button>
                    <button value={'.'} color='black'
                        onClick={inputNum}>.</button>
                    <button value={'-'} color='#f2a33c'
                        onClick={inputNum}>-</button>
                </div>

                <div className="btn-flex">
                    <button value={'Clear'} color='red' onClick={ClearText}>Clear</button>
                    <button value={'Delete'} color='red' onClick={DeleteText}>Delete</button>
                    <button value={'='} color='black' onClick={operation}>=</button>
                </div>

            </div>
        </div>
    );
}

export default Calculator;
