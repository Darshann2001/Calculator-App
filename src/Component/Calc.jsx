import React from 'react';
import './Calculator.css';
import { useState, useEffect } from 'react';
import { e } from 'mathjs';

const array = []

const Calc = () => {

    const [result, setResult] = useState('');
    const [array, setArray] = useState([]);

    const ops = ['/', '*', '+', '-', '.']

    function inputNum(e) {
        setArray((arr) => {

            var checkifNaN = isNaN(e.target.value)
            if (checkifNaN) {
                var index = arr.length - 1;
                if (index > -1) {
                    var lastIndexValue = isNaN(arr[arr.length - 1]);

                    if (lastIndexValue) {
                        arr[arr.length - 1] = e.target.value;
                    }
                    else {
                        arr.push(e.target.value);
                    }
                }
            }
            else {
                arr.push(e.target.value)
            }
            console.log('Hello', checkifNaN, arr);
            return [...arr];
        });

    }

    function operation(e) {
        // setArray([eval(arr)])
    }



    function ClearText() {
        // setResult('');
        setArray([])
    }

    function DeleteText(e) {
        try {
            setArray((arr) => {
                arr.pop();
                return [...arr];
            })
            console.log(array);

        } catch (error) {
            setArray([]);
            console.log('error');
        }
    }


    console.log('array', array)
    return (
        <div className='container'>
            <div className="wrapper">


                <div className="screen">
                    {array?.length ? array.join('') : 0}
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
                    <button value={'='} color='black' onClick={() => {
                        if (array.length)
                            setArray([eval(array.join(''))])
                    }}>=</button>
                </div>

            </div>
        </div>
    );
}

export default Calc;
