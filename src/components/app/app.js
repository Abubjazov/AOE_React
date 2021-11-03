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
                {key: 1, name: 'Джон Константин', salary: 1200, increase: true},
                {key: 2, name: 'Джон Уик', salary: 3700, increase: false},
                {key: 3, name: 'Томас Андерсон', salary: 5000, increase: false},
                {key: 4, name: 'Кевин Ломакс', salary: 800, increase: true}
            ],
            maxKey: 5
        }
    }

    deleteItem = (key) => {
        this.setState(({employeeData, maxKey}) => {
            return {
                employeeData: employeeData.filter(item => item.key !== key),
                maxKey: maxKey
            }
        })
        console.log(this.state)
    }
    
    addItem = (name, salary) => {
        this.setState(({employeeData, maxKey}) => {
            const newArr = [...employeeData, {key: maxKey, name, salary, increase: false}];
            return {
                employeeData: newArr,
                maxKey: maxKey + 1
            }
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
                <AppSearcher />
                <AppEmployeeList 
                    employeeData={this.state.employeeData}
                    onDelete={this.deleteItem}/>
                <AppEmployeeAddForm
                    onAdd={this.addItem}/>    
            </div>
        )
    }    
}
