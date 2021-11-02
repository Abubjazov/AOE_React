import { AppEmployeeAddForm } from '../app-employee-addform/app-employee-addform'
import { AppEmployeeList } from '../app-employee-list/app-employee-list'
import { AppInfo } from '../app-info/app-info'
import { AppSearcher } from '../app-searcher/app-searcher'
import './app.css'

const employeeData = [
    {key: 1, name: 'Джон Константин', salary: 1200, increase: true},
    {key: 2, name: 'Джон Уик', salary: 3700, increase: false},
    {key: 3, name: 'Томас Андерсон', salary: 5000, increase: false},
    {key: 4, name: 'Кевин Ломакс', salary: 800, increase: true}
]

export const App = () => {
    return (
        <div className="app">
            <AppInfo />
            <AppSearcher />
            <AppEmployeeList 
                employeeData={employeeData}/>
            <AppEmployeeAddForm />    
        </div>
    )
}
