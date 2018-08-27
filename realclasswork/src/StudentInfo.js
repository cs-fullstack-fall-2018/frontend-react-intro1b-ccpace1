import React, { Component } from 'react';
import './App.css';

class StudentInfo extends Component {
    render() {
        return (
            <div className="studentInfo">
                {this.props.name} has an {this.props.grade}
            </div>
        );
    }
}

export default StudentInfo;