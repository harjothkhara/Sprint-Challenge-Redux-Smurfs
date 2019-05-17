import React, { Component } from 'react';
import './SmurfForm.css';

class SmurfForm extends Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
        }
    }

    handleInputChange = e => {
        e.persist();
        this.setState(prevState => ({
            smurf: {
                ...prevState.smurf,
                [e.target.name] : e.target.value
            }
        }) );
        console.log(this.state);
    }

render() {
    return(
        <div className="SmurfForm">
            <form onSubmit={e => this.addSmurf(e, this.state.smurf)} >
                <input onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.smurf.name}
                name="name"
                required
                />
                <input onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.smurf.height}
                name="height"
                required
                />
                <input onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.smurf.age}
                name="age"
                required
                />
                <button type="submit">Add to the Village</button>
            </form>
        
        </div>
    )
}

}

export default SmurfForm;