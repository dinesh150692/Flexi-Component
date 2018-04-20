import React, { Component } from 'react';
import './style.css';

class Flexi extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            state: ''
        }
    }
    
    componentDidMount(){
        this.props.config.items.forEach(item => {this.renderComponent(item)});
    }

    renderOptions = (item) => {
        return item.values.map(function (value,index) {
            return <option
                key={value + index}
                value={value}>
                {value}
            </option>
        });
    }

    renderItems = (item, index) => {
        let temp = '';
        switch(item.type){
            case 'TextField':
                temp = (
                    <div className="flexiItem" key={index}>
                        <label className="label">{item.label}:</label>
                        <input type="text" name={item.name} className="selectpicker" onChange={(event) => this.setState({name: event.target.value})}/>
                     </div>
                );
              return temp;
            case 'DropDown':
                temp = (
                    <div className="flexiItem" key={index}>
                        <label className="label1">{item.label}:</label>
                        <select className="selectpicker selectpicker1" name={item.name} defaultValue="-" onChange={(event) => this.setState({state: event.target.value})}>
                            <option key="-" disabled value="-">---</option>
                            {this.renderOptions(item)}
                        </select>
                    </div>
                );
                return temp;
            default: 
                return '';
        }
    }
    
    renderComponent = () => {
        return this.props.config.items.map((item, index) => { return this.renderItems(item, index)})
    }

    render() {
        return (
            <div className="flexiContainer">
                {this.renderComponent()}
                {this.props.config.error &&
                    <div className="margin">
                        <label className="error">{this.props.config.error}</label>
                    </div>
                }
                <div className="buttonContainer">
                    <button className={this.state.name !== '' && this.state.state !== '' ? 'button' : ' button buttonDisabled'} onClick={() => this.props.onSubmit(this.state)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Flexi;
