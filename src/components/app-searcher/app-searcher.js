import { Component } from 'react'
import { AppFilter } from '../app-filter/app-filter'
import './app-searcher.css'

export class AppSearcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onSearchUpdate = (e) => {
        const term = e.target.value

        this.setState({term})
        this.props.onSearchUpdate(term)
    }

    render() {
        return (
            <div className="app-searcher">
                <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onSearchUpdate}/>
                <AppFilter />
            </div>
        )
    }
}
