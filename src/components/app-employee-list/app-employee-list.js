import { AppEmployee } from "../app-employee/app-employee"
import './app-employee-list.css'

export const AppEmployeeList = ({employeeData}) => {    
    return (
        <ul className="app-employee-list list-group">
            {employeeData.map((employee, index) => <AppEmployee key={employee.name + index} {...employee}/>)}
        </ul>
    )
}
