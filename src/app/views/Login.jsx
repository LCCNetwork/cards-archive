import React from 'react'

import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class Login extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <Card className='login-card'>
          <CardContent>
            <Typography type="headline" component="h2">
              Login
            </Typography>

            <div className='login-fields'>
              <div className="field-line">
                <TextField
                  className='login-field'
                  label="Email"
                  name="email"
                  // errorText={errors.email}
                  // onChange={onChange}
                  // value={user.email}
                />
              </div>

              <div className="field-line">
                <TextField
                  className='login-field'
                  label="Password"
                  type="password"
                  name="password"
                  // onChange={onChange}
                  // errorText={errors.password}
                  // value={user.password}
                />
              </div>
            </div>

            <Typography component="p">
              Don't have an account? Sign up!
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Cancel
            </Button>
            <Button dense color="primary">
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Login
