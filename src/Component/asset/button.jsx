import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div className='button'>
            <button
                // onClick={()=> props.handleClick(props.label
                //     )}
                onClick={props.onClick}                
                className={props.class} style={{ background: props.color }}>
                {props.label}
            </button>
        </div>
    );
}

export default Button;
