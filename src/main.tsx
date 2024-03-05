import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>

    </Provider>
  </React.StrictMode>,
)
