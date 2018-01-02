import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            fnError: '',
            lastName: '',
            lnError: '',
            email: '', 
            emailError: '',
            usaState: '',
            zip: '',
            zipError: '',
            topic: '',
            message: '',
            response: ''
        };

        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
        // this._postToServer = this._postToServer.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();

        this.setState({ fnError: '', lnError: '', emailError: '', zipError: '' })

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!/^[a-zA-Z]+$/.test(this.state.firstName)) {
            this.setState({ fnError: 'First Name must only contain characters '})
        } if (!/^[a-zA-Z][\sa-zA-Z-]*[a-zA-Z]'?$/.test(this.state.lastName)) {
            this.setState({ lnError: 'Last name must only contain characters, hyphens, or apostrphes'})
        } if (!re.test(this.state.email)) {
            this.setState({ emailError: 'Invalid Email'})
        } if (!/^\d{5}$|^\d{5}-\d{4}$/.test(this.state.zip.toString())) {
            this.setState({ zipError: 'Invalid Zip Code'})
        } else {
            this._postToServer();
        }
    }

    _postToServer() {
        axios.post(this.props.url, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            usaState: this.state.usaState,
            zip: this.state.zip,
            topic: this.state.topic,
            message: this.state.message
        })
        .then((response) => {
            console.log(response);
            this.setState({ response: response.data.message });
        })
        .catch((error) => {
            console.log(error);
            this.setState({ response: 'There was an error' });
        })
    }

    _handleChange = (input) => (event) => {
        this.setState({
            ...this.state,
            [input]: event.target.value
        });
    }

    render() {
        return (
            <div className="form-grid">
                <div className="form">
                <h3>Send us a message</h3>
                    <form onSubmit={this._handleSubmit}>
                        <p>
                        <label>First Name </label>
                        <input type="text" value={this.state.firstName} onChange={this._handleChange("firstName")}/>
                        <br></br>
                        <em className="input-error">{this.state.fnError}</em>
                        </p>
                        <p>
                        <label>Last Name </label>
                        <input type="text" value={this.state.lastName} onChange={this._handleChange("lastName")}/>
                        <br></br>
                        <em className="input-error">{this.state.lnError}</em>
                        </p>
                        <p>
                        <label>Email Address </label>
                        <input type="text" value={this.state.email} onChange={this._handleChange("email")}/>
                        <br></br>
                        <em className="input-error">{this.state.emailError}</em>
                        </p>
                        <p>
                        <label>State</label>
                        <select value={this.state.usaState} onChange={this._handleChange("usaState")}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        </p>
                        <p>
                        <label>Zip Code </label>
                        <input type="text" value={this.state.zip} onChange={this._handleChange("zip")}/>
                        <br></br>
                        <em className="input-error">{this.state.zipError}</em>
                        </p>
                        <p className="full-width">
                        <label>Topic </label>
                        <input className="topic" type="text" value={this.state.topic} onChange={this._handleChange("topic")}/>
                        </p>
                        <p className="full-width">
                        <label>Write your message </label><br></br>
                        <textarea name="" id="" cols="30" rows="7" value={this.state.message} onChange={this._handleChange("message")}></textarea>
                        </p>
                        <p className="full-width">
                        <button>Send</button>
                        </p>
                    </form>
                    <div className="response"><p>{this.state.response}</p></div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
