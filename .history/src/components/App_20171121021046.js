import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../actions'

import logo from './logo.svg';
import './App.scss';
import NoteContainer from './Notes/NoteContainer'

class App extends Component {
  
  constructor() {
    super()
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.props.dispatch(actions.toggleModal())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NoteContainer isOpen={this.props.isOpen} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isOpen: state.modal.isOpen
})
const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

