import { AppEmployeeAddForm } from '../app-employee-addform/app-employee-addform'
import { AppEmployeeList } from '../app-employee-list/app-employee-list'
import { AppInfo } from '../app-info/app-info'
import { AppSearcher } from '../app-searcher/app-searcher'
import './app.css'

export const App = () => {
    const employeeData = [
        {name: 'Джон Константин', salary: 1200, increase: true},
        {name: 'Джон Уик', salary: 3700, increase: false},
        {name: 'Томас Андерсон', salary: 5000, increase: false},
        {name: 'Кевин Ломакс', salary: 800, increase: true}
    ]

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
