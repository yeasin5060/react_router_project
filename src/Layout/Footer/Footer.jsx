import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="foot">
      <div className ="container">
          <div className ="foot_wrapper">
              <div className ="foot_contant">
                  <img src="images/innovate_logo.png" alt="not found"/>
                  <p className ="pera">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
              </div>
              <div className ="foot_wrapper_two">
                  <div className ="foot_features">
                      <h4 className ="foot_heading">Features</h4>
                      <ul className ="foot_list">
                          <li>
                              <a href="#">home</a>
                          </li>
                          <li>
                              <a href="#">About</a>
                          </li>
                          <li>
                              <a href="#">Benifit</a>
                          </li>
                          <li>
                              <a href="#">Pricing</a>
                          </li>
                          <li>
                              <a href="#">blog</a>
                          </li>
                      </ul>
                  </div>
                  <div className ="foot_products">
                      <h4 className ="foot_heading">Products</h4>
                      <ul className ="foot_list">
                          <li>
                              <a href="#">Task Management</a>
                          </li>
                          <li>
                              <a href="#">Company growth</a>
                          </li>
                          <li>
                              <a href="#">Time tracking</a>
                          </li>
                      </ul>
                  </div>
                  <div className ="foot_support">
                      <h4 className ="foot_heading">Support</h4>
                      <ul className ="foot_list">
                          <li>
                              <a href="#">Customer service</a>
                          </li>
                          <li>
                              <a href="#">Accessibility</a>
                          </li>
                          <li>
                              <a href="#">Contact us</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className =" last_foot_wrapper">
              <div className ="last_contant">
                  <a href="#">@20201 Innovate.All rights reserved.</a>
              </div>
              <div className ="last_contant_wrapper">
                  <div className ="last_contant_two">
                      <a href="#">Privacy policy</a>
                  </div>
                  <div className ="last_contant_two">
                      <a href="#">Terms & condition</a>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer