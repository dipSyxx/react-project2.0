import React, { Component } from 'react'

export default class Checkbox extends Component {
    render() {
        return (
            <form className='form'>
                <div className='form-sector form-sector-check'>
                    <label><a href='/'>I have read and agree to the terms of registration*</a></label>
                    <input className='check' type='checkbox'></input>
                </div>
            </form>
        )
    }
}
