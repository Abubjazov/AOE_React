import './app-filter.css'

export const AppFilter = () => {
    return (
        <div className="app-filter">
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button">
                        Все сотрудники
                </button>

                <button 
                    className="btn btn-outline-light"
                    type="button">
                        На повышение
                </button>

                <button 
                    className="btn btn-outline-light"
                    type="button">
                        З/П более 1000$
                </button>
            </div>
        </div>
    )
}
