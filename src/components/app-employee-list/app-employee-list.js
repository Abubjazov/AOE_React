import { AppEmployee } from "../app-employee/app-employee"
import './app-employee-list.css'

export const AppEmployeeList = () => {
    return (
        <ul className="app-employee-list list-group">
            <AppEmployee />
            <AppEmployee />
            <AppEmployee />
        </ul>
    )
}
