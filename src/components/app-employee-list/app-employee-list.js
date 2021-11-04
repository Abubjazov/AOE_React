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
            {elements.length > 0 ? elements : <li className="app-employee list-group-item d-flex justify-content-between"><span className="list-group-item-label">Сотрудники не найдены</span></li>}
        </ul>
    )
}

