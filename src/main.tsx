import ReactDOM from 'react-dom/client'
import React, {Suspense} from 'react'
import {QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App.tsx'
import './normalize.css'
import './main.css'
import {store} from '@/store'
import {queryClient} from '@/api'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
