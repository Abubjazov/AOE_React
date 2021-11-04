import './app-employee.css'

export const AppEmployee = (props) => { 
    const {name, salary, increase, like, onDelete, onToggleProp, onPropChange} = props

    let empClassNames = 'app-employee list-group-item d-flex justify-content-between'

    if (increase) {empClassNames += ' increase'}
    if (like) {empClassNames += ' like'}

    return (
        <li className={empClassNames}>
            <span 
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="like">{name}</span>

            <input type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={onPropChange}
                data-change="salary"/>

            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
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
