import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(
            <div>
                {this.props.elementName === "input" ?
                <div className={this.props.divClass}>
                    <input 
                    className="form-control" 
                    id={this.props.name} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message="Please enter your name." 
                    value={this.props.value}
                    onChange={e => this.props.onChange(e)}
                    />
                    <p className="help-block text-danger"></p>
                </div>
                    :
                <div className={this.props.divClass}>
                    <textarea
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message="Please enter a message."
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}
                
                    />
                    <p className="help-block text-danger"></p>
                </div>
                }
            </div>        
        )
    }
}

export default Field;