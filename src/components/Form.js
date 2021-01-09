import React from 'react';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    passwordErrorError: "",
};

class Form extends React.Component {
    state = initialState;


    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };



    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    };

    validate = event => {
        return true;
    }


    render() {
        return (
            <>
                <div className="logo"></div>
                <h3>Welcome, please sign up</h3>
                <form id="newForm" onSubmit={this.handleSubmit}>
                    <div className="container-main">
                        <h1>Sign Up</h1>


                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                name="firstName"
                                placeholder="first name"
                                value={this.state.firstName}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div style={{ height: "2px", backgroundColor: "transparent" }}> {
                            this.state.firstName.length < 2 && this.state.firstName.length >= 1 ?
                                <p style={{ color: 'red' }
                                } > Must be longer than 2</p> :
                                ''
                        }</div>


                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                name="lastName"
                                placeholder="last name"
                                value={this.state.lastName}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div style={{ height: "2px", backgroundColor: "transparent" }}> {
                            this.state.lastName.length < 4 && this.state.lastName.length >= 1 ?
                                <p style={{ position: 'relative', height: '12px', color: 'red', backgroundColor: 'transparent' }
                                } > Must be longer than 4</p> :
                                ''
                        }</div>


                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div style={{ height: "2px", backgroundColor: "transparent" }}> {
                            !this.state.email.includes("@") && this.state.email.length >= 1 ?
                                <p style={{ color: 'red' }
                                } > Must be a valid email address</p> :
                                ''
                        }</div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div style={{ height: "2px", backgroundColor: "transparent" }}>{
                            this.state.password.length < 6 && this.state.password.length >= 1 ?
                                <p style={{ color: 'red' }
                                } > Must be 6 characters or more</p> :
                                ''
                        }</div>

                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Confirm Password:</label>
                            <input
                                name="passwordConfirm"
                                placeholder="confirm password"
                                value={this.state.passwordConfirm}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div style={{ height: "2px", backgroundColor: "transparent" }}>
                            {
                                this.state.passwordConfirm !== this.state.password ?
                                    <p style={{ color: 'red' }
                                    } > Password does not match!</p> :
                                    ''
                            }
                        </div>
                        <input className="btn" type="submit" value="Create User" />
                    </div>
                </form>
            </>
        );
    }

}


export default Form;
