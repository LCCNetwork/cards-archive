import React from 'react'

import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class HomeNavbar extends React.Component {
  render () {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography type='title' color='inherit' className='flex'>
            Cards
          </Typography>
          <Link to="/login">
            <Button color='contrast'>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default HomeNavbar
