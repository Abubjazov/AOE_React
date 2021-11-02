import { AppEmployee } from "../app-employee/app-employee"
import './app-employee-list.css'

export const AppEmployeeList = ({employeeData, onDelete}) => {
    const elements = employeeData.map(item => {
        const {key, ...itemProps} = item

        return (<AppEmployee key={key} {...itemProps} onDelete={() => onDelete(key)}/>)
    })

    return (
        <ul className="app-employee-list list-group">
            {elements}
        </ul>
    )
}
