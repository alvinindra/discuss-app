import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import '@/styles/main.scss'
import '@unocss/reset/normalize.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StrictMode } from 'react'
import store from '@/states'
import { LoadingBar } from 'react-redux-loading-bar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="fixed top-0 z-40 w-full">
          <LoadingBar className=" bg-green-500" />
        </div>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
