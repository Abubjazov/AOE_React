import './app-employee.css'

export const AppEmployee = (props) => { 
    const {name, salary, increase, like, onDelete, onToggleIncrease, onToggleLike} = props

    let empClassNames = 'app-employee list-group-item d-flex justify-content-between'

    if (increase) {empClassNames += ' increase'}
    if (like) {empClassNames += ' like'}

    return (
        <li className={empClassNames}>
            <span 
                className="list-group-item-label"
                onClick={onToggleLike}>{name}</span>

            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>

            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
