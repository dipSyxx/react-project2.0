import React, { Component } from 'react'
import Button from './Button';
import Checkbox from './Checkbox';
import Selector from './Selector';

export default class Input extends Component {
    constructor(props) {
        super(props);
        //свойство інпута з початку
        this.state = {
            email: "",
            password: "",
            submitE: "",
            submitP: "",
            male: "",
            female: "",
            submitM: "",
            submitF: "",
        }

        //підключаєм метод
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()//офає перезагрузку странички
        this.setState({
            submitE: this.state.email,//кнопка сабміт
            submitP: this.state.password,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form'>

                    <div className='form-sector'>
                        <label>Email:</label>
                        <input value={this.state.email} onChange={this.handleEmail} type='text' placeholder='Email..' />
                    </div>

                    <div className='form-sector'>
                        <label>Password:</label>
                        <input value={this.state.password} onChange={this.handlePassword} type='password' placeholder='Password..' />
                    </div>
                    <Selector />
                    <Button />
                </form>
                <Checkbox />
                <h2 style={{ textAlign: "center" }}>Result:</h2>
                <h3>Your Email: {this.state.submitE}</h3>
                <h3>Your Password: {this.state.submitP}</h3>
            </div>
        )
    }
}
