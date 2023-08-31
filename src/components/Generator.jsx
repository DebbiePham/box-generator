import React, {useState} from 'react';
import './styles.css';

const Generator = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');


    const createBox = (e) => {
        e.preventDefault();

        let newBox = document.createElement('div')
        newBox.style.backgroundColor = color;
        newBox.style.height = size + 'px';
        newBox.style.width = size + 'px';

        let boxRow = document.getElementById('boxes');
        boxRow.appendChild(newBox);
        setColor('');
        setSize('');
    }

    return (
        <div className='container'>
            <h1>Create New Boxes</h1>
            <p>please enter color and size of the box that you want to create</p>
            <form onSubmit = {createBox}>
                <div className='form'>
                    <label className='label'><strong>Color</strong></label>
                    <input type='text' value={color} onChange = {(e) => {setColor(e.target.value);}} className='input' />

                    <label className='label'><strong>Size (pixels)</strong></label>
                    <input type='number' value={size} onChange = {(e) => {setSize(e.target.value);}} className='input' />
                    <button className='btn'>Add</button>
                </div>
                <div className='boxes' id='boxes'></div>
            </form>   
        </div>
    )
}
export default Generator;