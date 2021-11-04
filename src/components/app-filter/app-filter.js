import { Component } from 'react'
import './app-filter.css'

export class AppFilter extends Component {
    onFilterUpdate = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter')

        this.props.onFilterUpdate(filter)
        e.target.parentNode.childNodes.forEach(elem =>  elem.className = 'btn btn-outline-light')
        e.target.className = 'btn btn-light'
    }

    render() {
        const buttonsArr = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'liked', label: 'На повышение'},
            {name: '1000', label: 'З/П более 1000$'}
        ]

        const buttons = buttonsArr.map(({name, label}) => {
            return (
                <button 
                    className={name === 'all' ? 'btn btn-light' : 'btn btn-outline-light'}
                    type="button"
                    data-filter={name}
                    onClick={this.onFilterUpdate}>
                        {label}
                </button>
            )
        })

        return (
            <div className="app-filter">
                <div className="btn-group">
                    {buttons}
                </div>
            </div>
        )
    }
}
