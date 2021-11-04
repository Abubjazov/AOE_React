import './app-filter.css'

export const AppFilter = (props) => {

    const onFilterUpdate = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter')

        props.onFilterUpdate(filter)
    }


    const buttonsArr = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'liked', label: 'На повышение'},
        {name: '1000', label: 'З/П более 1000$'}
    ]

    const buttons = buttonsArr.map(({name, label}) => {
        const clazz = props.filter === name ? 'btn-light' : 'btn-outline-light'

        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                data-filter={name}
                onClick={onFilterUpdate}>
                    {label}
            </button>
        )
    })

    return (
        <div className="app-filter">
            <div className="btn-group">
                {buttons}
            </div>
        </div>
    )
}
