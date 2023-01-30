import {Component} from 'react'
import {motion} from "framer-motion"
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <div>
        <motion.input
          whileFocus={{borderBottom:"2px solid #b3b0af", y:-5}}
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <motion.input
       whileFocus={{borderBottom:"2px solid #b3b0af", y:-5}}
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, when:"beforeChildren", staggerChildren:1}} className="login-form-container">
        <motion.img
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <motion.img
        initial={{scale:0.4, y:"40vh", opacity:0}}
        animate={{y:0, scale:1, opacity:1}}
        transition={{type:"spring", damping:16}}
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        />
        <motion.form 
        initial={{y:"40vh", opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{type:"spring", damping:16, delay:0.5}}
        className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <motion.button whileHover={{scale:1.01}} whileTap={{scale:0.98, opacity:0.8}} type="submit" className="login-button">
            Login
          </motion.button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </motion.form>
      </motion.div>
    )
  }
}

export default LoginForm
