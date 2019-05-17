import React, { Component } from 'react';
import './Smurf.css';
import { Link } from 'react-router-dom';

class Smurf extends Component {
    render() {
        return (
            <div className="Smurf">
            
            <header>
                <h2>{this.props.smurf.name} </h2>
                <button onClick={e => this.deleteSmurf(this.smurf.props.id)}>X</button>
            </header>

            <div className="height">
                <h3>height:</h3>
                <p>{this.props.smurf.height} tall</p>
            </div>

            <div className="age">
                <h3>Age:</h3>
                <p>{this.props.smurf.age} smurf years old</p>
            </div>

            <div className="edit">
                <Link to={{ pathname: "/edit-form", state: {
                    name: this.props.name,
                    age: this.props.age,
                    height: this.props.height,
                    id: this.props.id

                }}}>
                    <button>Edit Smurf</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default Smurf;