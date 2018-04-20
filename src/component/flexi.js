import React, { Component } from 'react';
import './style.css';

class Flexi extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }
    
    formSubmit = (value) => {
       var error = '';
       var count = 0;
        for (var key in value) {
            if(key !== 'error' && (value[key] === '' || value[key].length === 0)){
                 error = 'Please Enter Value for ' + key;
                 count = Object.keys(value).length;
            }else{
                count++;
            }
            if(count === Object.keys(value).length){
                if(error === ''){
                    delete value.error;
                    this.props.onSubmit(value);    
                }else{  
                    this.setState({ error : error});
                }
                break;
            }
        }
        
            
    }
    componentWillMount(){
        return this.props.config.items.map((item, index) => { return this.setState({[item.name]: ''})});
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
                        <input type="text" name={item.name} className="selectpicker" onChange={(event) => {this.setState({ [event.target.name]: event.target.value})}}/>
                     </div>
                );
                return temp;
            case 'DropDown':
                temp = (
                    <div className="flexiItem" key={index}>
                        <label className="label1">{item.label}:</label>
                        <select className="selectpicker selectpicker1" defaultValue={"-"} name={item.name} onChange={(event) => {if(event.target.value !== '-'){this.setState({ [event.target.name]: event.target.value})}}}>
                            <option disabled value='-'>---</option>
                            {this.renderOptions(item)}
                        </select>
                    </div>
                );
                return temp;
            case 'Number':
                temp = (
                    <div className="flexiItem" key={index}>
                        <label className="label">{item.label}:</label>
                        <input type="number" name={item.name} className="selectpicker" onChange={(event) => {this.setState({ [event.target.name]: event.target.value})}}/>
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
                {this.state.error &&
                    <div className="margin">
                        <label className="error">{this.state.error}</label>
                    </div>
                }
                <div className="buttonContainer">
                    <button className='button' onClick={() => this.formSubmit(this.state)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Flexi;
