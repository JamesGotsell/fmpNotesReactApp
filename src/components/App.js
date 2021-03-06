import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../actions'

import '../scss/main.scss'

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
          <h1 className="App-title">Notes App</h1>
        </header>
        <p className="App-intro">
          this is a basic notes app with react and redux 
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

