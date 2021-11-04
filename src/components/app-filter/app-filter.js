import { Component } from 'react'
import './app-filter.css'

export class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'all'
        }
    }

    onFilterUpdate = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter')

        this.setState({filter})
        this.props.onFilterUpdate(filter)

        e.target.parentNode.childNodes.forEach(elem =>  elem.className = 'btn btn-outline-light')
        e.target.className = 'tn btn-light'
    }

    render() {
        return (
            <div className="app-filter">
                <div className="btn-group">
                    <button 
                        className="btn btn-light"
                        type="button"
                        data-filter="all"
                        onClick={this.onFilterUpdate}>
                            Все сотрудники
                    </button>
    
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        data-filter="liked"
                        onClick={this.onFilterUpdate}>
                            На повышение
                    </button>
    
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        data-filter="1000"
                        onClick={this.onFilterUpdate}>
                            З/П более 1000$
                    </button>
                </div>
            </div>
        )
    }
}
