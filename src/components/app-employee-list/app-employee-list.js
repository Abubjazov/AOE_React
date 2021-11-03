import { AppEmployee } from "../app-employee/app-employee"
import './app-employee-list.css'

export const AppEmployeeList = ({employeeData, onDelete, onToggleProp}) => {
    const elements = employeeData.map(item => {
        const {key, ...itemProps} = item

        return (<AppEmployee 
            key={key} 
            {...itemProps} 
            onDelete={() => onDelete(key)}
            onToggleProp={(e) => onToggleProp(key, e.currentTarget.getAttribute('data-toggle'))}/>)
    })

    return (
        <ul className="app-employee-list list-group">
            {elements}
        </ul>
    )
}
