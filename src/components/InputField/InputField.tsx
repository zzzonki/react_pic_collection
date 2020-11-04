import React, {Component} from 'react'
import './style.scss'

type InputFieldProps = {
    getTag(tag: string): void,
    currentTag: string
}

export default class InputField extends Component<InputFieldProps, {}>{

    changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.getTag(event.target.value)
    }
    
    render(){
        return(
            <input onChange={this.changeHandler} type='text' className='input-field' placeholder='введите тег' value={this.props.currentTag}></input>
        )
    }

}