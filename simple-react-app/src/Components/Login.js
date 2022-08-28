import React, { Component } from 'react';
import styles from './Login.module.css';

export default class Login extends Component {
  render() {
      return (
        <div className='Login'>
          <div className={styles.container + ' container'}>
              <div className="row">
                <div id={styles['login-column']} className="col-sm">
                  <h3>Login</h3> 
                  <form className="form-group">
                    <div className={styles['form-floating'] + ' form-floating'}>
                      <input type="text" className="form-control" id="user-name" placeholder="Username"/>              
                      <label for="user-name">Username</label>
                    </div>
                    <div className={styles['form-floating'] + ' form-floating'}>
                      <input type="text" className="form-control" id="password" placeholder="Password"/>
                      <label for="password">Password</label>
                    </div>
                    <button id={styles['submit']} className="btn btn-primary">Submit</button>
                  </form>          
                </div>
              </div>
            </div>
        </div>
    );
  }
}
