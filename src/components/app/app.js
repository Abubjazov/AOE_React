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
            // Вариант 1:
            // const index = employeeData.findIndex(elem => elem.key === key)

            // return {
            //     employeeData: [...employeeData.slice(0, index), {...employeeData[index], increase: !employeeData[index].increase}, ...employeeData.slice(index + 1)]
            // }

            employeeData: employeeData.map(item => {
                if (item.key === key) {
                    return {...item,  [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    render() {
        const employeeIncSum = this.state.employeeData.filter(item => item.increase === true).length

        return (
            <div className="app">
                <AppInfo 
                    employeeSum={this.state.employeeData.length}
                    employeeIncSum={employeeIncSum}/>
                <AppSearcher />
                <AppEmployeeList 
                    employeeData={this.state.employeeData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <AppEmployeeAddForm
                    onAdd={this.addItem}/>    
            </div>
        )
    }    
}
