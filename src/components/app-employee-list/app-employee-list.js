import { AppEmployee } from "../app-employee/app-employee"
import './app-employee-list.css'

export const AppEmployeeList = () => {
    return (
        <div className="app-employee-list">
            <AppEmployee />
            <AppEmployee />
            <AppEmployee />
            <AppEmployee />
        </div>
    )
}
