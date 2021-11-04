import { Component } from 'react'
import { AppEmployeeAddForm } from '../app-employee-addform/app-employee-addform'
import { AppEmployeeList } from '../app-employee-list/app-employee-list'
import { AppInfo } from '../app-info/app-info'
import { AppSearcher } from '../app-searcher/app-searcher'
import './app.css'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeData: [
                {key: 1, name: 'Джон Константин', salary: 1200, increase: true, like: true},
                {key: 2, name: 'Джон Уик', salary: 3700, increase: false, like: false},
                {key: 3, name: 'Томас Андерсон', salary: 5000, increase: false, like: false},
                {key: 4, name: 'Кевин Ломакс', salary: 800, increase: true, like: false}
            ],
            maxKey: 5,
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (key) => {
        this.setState(({employeeData, maxKey}) => {
            return {
                employeeData: employeeData.filter(item => item.key !== key),
                maxKey: maxKey
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({employeeData, maxKey}) => {
            const newArr = [...employeeData, {key: maxKey, name, salary, increase: false, like: false}];
            return {
                employeeData: newArr,
                maxKey: maxKey + 1
            }
        })
    }

    onToggleProp = (key, prop) => {
        this.setState(({employeeData}) => ({
            employeeData: employeeData.map(item => {
                if (item.key === key) {
                    return {...item,  [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {return items}

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'liked':
                return items.filter(item => item.like)

            case '1000':
                return items.filter(item => item.salary > 1000)
        
            default:
                return items
        }
    }

    onSearchUpdate = (term) => {
        this.setState({term})
    }

    onFilterUpdate = (filter) => {
        this.setState({filter})
    }

    render() {
        const {employeeData, term, filter} = this.state
        const employeeIncSum = this.state.employeeData.filter(item => item.increase === true).length
        let visibleEmpData = this.filterEmp(this.searchEmp(employeeData, term), filter)

        return (
            <div className="app">
                <AppInfo 
                    employeeSum={this.state.employeeData.length}
                    employeeIncSum={employeeIncSum}/>
                <AppSearcher 
                    onSearchUpdate={this.onSearchUpdate}
                    onFilterUpdate={this.onFilterUpdate}
                    filter={this.state.filter}/>
                <AppEmployeeList 
                    employeeData={visibleEmpData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <AppEmployeeAddForm
                    onAdd={this.addItem}/>    
            </div>
        )
    }    
}
