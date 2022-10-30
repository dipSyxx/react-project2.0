import React, { Component } from 'react'

export default class Selector extends Component {
    render() {
        return (

            <div className='selector-form'>
                <label>Select Gender:</label>
                <select className='select-form'>
                    <option className='male'>Male</option>
                    <option className='female'>Female</option>
                </select>
            </div>

        )
    }
}
