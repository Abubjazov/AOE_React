import { AppInfo } from '../app-info/app-info'
import { AppSearcher } from '../app-searcher/app-searcher'
import './app.css'

export const App = () => {
    return (
        <div className="app">
            <AppInfo />
            <AppSearcher/>        
        </div>
    )
}
