import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions';

import Modal from 'react-modal';
import NotesList from './NotesList'


class NoteContainer extends React.Component {
  
  constructor(props){
    super(props)
    console.log(this.props)      
      this.closeModal = this.closeModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.toggleModal = this.toggleModal.bind(this);
  }


  closeModal() {
    this.props.toggleModal()
  }


  handleSubmit(event) {
 
    let inputTitle = this.refs.inputTitle.value;
    let inputBody = this.refs.inputBody.value
    event.preventDefault();
    if(inputTitle && inputBody !==""){
      this.props.dispatch(actions.createNote({title:inputTitle, text:inputBody}))
    }
   
    this.closeModal()
  }
  componentDidMount() {
      // this.props.dispatch(actions.showNotes(notes))
  }

  componentWillReceiveProps(nextProps) {
    // i know the correct props are getting passed
    console.log(this.props)
  }

    render() {
      const {dispatch , isOpen , notes, toggleModal  } = this.props 
      return (
        <div>
            <div>
            <button onClick={() => {this.props.toggleModal()}}>Add New Note </button>
                        <Modal
                          isOpen={isOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          dispatch={this.props.dispatch}
                          contentLabel="Create Note "
                        >
                          <button onClick={this.closeModal}>close</button>
                            <div>New Note </div>
                                <form onSubmit={this.handleSubmit}>
                                  <p> i need to dispatch createNote action with the title and test</p>
                                  <label>title</label>
                                      <input type="text" ref="inputTitle"/>
                                  <label>Note Body</label>
                                      <textarea type='text' ref="inputBody"/>     
                                  <input type="submit" value="Submit"/>
                            </form>
                        </Modal>
          </div>
            <NotesList notes={this.props.notes} 
              dispatch={this.props.dispatch}
              isOpen={this.props.isOpen}
              toggleModal={this.props.toggleModal}
              key={i}/>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    notes: state.notes
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteContainer)