import './app-info.css'

export const AppInfo = (props) => {
    const {employeeSum, employeeIncSum} = props
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в ООО "Рога и копыта"</h1>
            <h2>Общее число сотрудников: {employeeSum}</h2>
            <h2>Премию получат: {employeeIncSum}</h2>
        </div>
    )
}
