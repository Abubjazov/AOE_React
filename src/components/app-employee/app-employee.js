import { Component } from 'react'
import './app-employee.css'

export class AppEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: props.increase,
            like: false
        } 
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onEmployeeClick = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
 
    render() {
        const {name, salary} = this.props
        const {increase, like} = this.state

        let empClassNames = 'app-employee list-group-item d-flex justify-content-between'

        if (increase) {empClassNames += ' increase'}
        if (like) {empClassNames += ' like'}

        return (
            <li className={empClassNames}>
                <span 
                    className="list-group-item-label"
                    onClick={this.onEmployeeClick}>{name}</span>
    
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
    
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
    
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
