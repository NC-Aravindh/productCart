import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyProvider } from "./utils/Context.jsx"
import { Provider } from 'react-redux'
import appStore from './utils/appstore.js'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
    </StrictMode>
    ,
)
