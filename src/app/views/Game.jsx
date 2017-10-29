import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class Timer extends React.Component {
  render () {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <ConnectedTimerDrawer />
            <Typography type='title' color='inherit' className='flex'>
              Cards
            </Typography>
            <Link to="/login">
              <Button color='contrast'>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <ConnectedTimeDisplay/>
      </div>
    )
  }
}

Timer.contextTypes = { store: PropTypes.object }

export default Timer
