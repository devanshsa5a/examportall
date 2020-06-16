import React from 'react'
import classes from './adminComponent.module.css';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/BottonUI';
import axios from 'axios';

class AdminComponent extends React.Component {

    state = {
        signIn: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignInForm = {
            ...this.state.signIn
        };
        const updatedFormElement = {
            ...updatedSignInForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignInForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedSignInForm) {
            formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ signIn: updatedSignInForm, formIsValid: formIsValid });
    }


    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|} ~-]+(?: \.[a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        // if (rules.isNumeric) {
        //     const pattern = /^\d+$/;
        //     isValid = pattern.test(value) && isValid
        // }

        return isValid;
    }


    // componentDidMount = () => {
    //     console.log('mounted');
    // }
    signInHandler = (event) => {
        this.setState({
            loading: true
        })
        event.preventDefault();
        let data = {
            "username": "User",
            "password": "bSakshaMdc"
        }
        axios.post('https://saksham20.herokuapp.com/auth', data).then(res => {
            this.setState({
                loading: false
            })
            console.log(res.data.token);
        }).catch(errr => {
            console.log(errr);
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.signIn) {
            formElementsArray.push({
                id: key,
                config: this.state.signIn[key]
            });
        }

        let form = (
            <form onSubmit={this.signInHandler}>
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
                <Button name='SignIn'></Button>
            </form>
        );
        if (this.state.loading) {
            form = (<p>Loading... </p>)
        }

        return (
            <div className={classes.Container}>
                <h1> Admin signIn</h1>
                {form}
            </div>

        )
    }
}

export default AdminComponent;