import './app-filter.css'

export const AppFilter = (props) => {
    const onFilterUpdate = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter')

        props.onFilterUpdate(filter)
        e.target.parentNode.childNodes.forEach(elem =>  elem.className = 'btn btn-outline-light')
        e.target.className = 'btn btn-light'
    }


    const buttonsArr = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'liked', label: 'На повышение'},
        {name: '1000', label: 'З/П более 1000$'}
    ]

    const buttons = buttonsArr.map(({name, label}) => {
        return (
            <button 
                className={name === 'all' ? 'btn btn-light' : 'btn btn-outline-light'}
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
