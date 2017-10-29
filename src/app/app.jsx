import './app.html'
import './css/app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  combineReducers({
    ui: ui,
    token: token,
    activeSession: activeSession,
    sessions: sessions,
    timerState: timerState,
    time: time,
    router: routerReducer
  }),
  {
    ui: {
      drawer: {
        open: false,
      }
    },
    token: null
  }, composeEnhancers(
    applyMiddleware(middleware)
  )
)

const Home = Loadable({
  loader: () => import('./views/Home.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})
const Game = Loadable({
  loader: () => import('./views/Game.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})
const Login = Loadable({
  loader: () => import('./views/Login.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})

render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/game/:game' component={Game} />
          <Route path='/login' component={Login} />
        </div>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('app')
)
