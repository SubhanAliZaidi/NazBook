import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/Notes/NoteContext';

const About = () => {

  return (
    <>
      <div className="container col-md-9">
        <div className="pricing-header px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
          <h1 className="display-6"  style={{"marginTop": "calc(100vh - (100vh - 75px)"}}>Pricing</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div className="container">

          <div className="card-deck mb-3 text-center d-flex flex-direction-row align-items-cneter justify-content-around g-2">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-danger">Sign up for free</button>
              </div>
            </div>

            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-danger">Getting started</button>
              </div>
            </div>

            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-danger">Contact us</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;