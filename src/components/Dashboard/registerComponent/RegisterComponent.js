import PropTypes from "prop-types";
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/BottonUI';

class RegisterComponent extends React.Component {
    state = {
        Register: {
            heading: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the heading'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            team: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Match Between'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            image: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'paste the img url'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            desciption: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Enter the desciption here'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,
        loading: false,
        redirect: null
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegisterForm = {
            ...this.state.Register
        };
        const updatedFormElement = {
            ...updatedRegisterForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ Register: updatedRegisterForm, formIsValid: formIsValid });
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }


    registerHandler = (event) => {
        this.setState({
            loading: true
        })
        event.preventDefault();
        let config = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlZGZjMjJjYjgwZTExOTllNTU4NDE4ZSIsInVzZXJuYW1lIjoiVXNlciIsInBhc3N3b3JkIjoiYlNha3NoYU1kYyJ9LCJpYXQiOjE1OTIzMzUyMjUsImV4cCI6MTU5MjMzODgyNX0.ZsphyxU-79bodndEvtsK6Dth8LLeX1JL27CSLmOxYYI',
            }
        }
        let data = {
            "heading": "TEAM BDCOE LAUNCHES THE SAKSHAM APP",
            "team": "IT vs CSE",
            "image": "https://tineye.com/images/widgets/mona.jpg",
            "description": "Match is won by IT"
        }
        axios.post('https://saksham20.herokuapp.com/cards', data, config).then(res => {
            this.setState({
                loading: false
            })
            if (res.data === 'done') {
                console.log('done register');
                this.setState({
                    redirect: <Redirect to='/Dashboard' />
                })

            } else
                console.log(`${res.data.data}`);
        }).catch(err => {
            this.setState({
                loading: false
            })
            console.log('submit again error');
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.Register) {
            formElementsArray.push({
                id: key,
                config: this.state.Register[key]
            });
        }

        let form = (
            <form onSubmit={this.registerHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button name='Register'></Button>
                {/* <Link to='/Test'>
                </Link> */}
            </form>
        );
        if (this.state.loading) {
            form = (<p>Loading... </p>)
        }

        return (
            <div>
                <h1>This is Register Form</h1>
                {this.state.redirect}
                {form}
                {/* <Link to="/"><ButtonUi name='go to Home' clicked={this.props.closeBackdrop} /></Link> */}
            </div>
        )
    }
}

RegisterComponent.propTypes = {
    closeBackdrop: PropTypes.func
}

export default RegisterComponent;  