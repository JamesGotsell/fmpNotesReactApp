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
 

  componentWillReceiveProps(nextProps) {
    // i know the correct props are getting passed
    console.log(this.props)
  }

    render() {
      const { dispatch , isOpen , notes, toggleModal  } = this.props 
      return (
        <div className='note-container'>
              <div className="new-note-button-modal">
              <button onClick={() => {toggleModal()}}>Add New Note </button>
                          <Modal
                            isOpen={isOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            dispatch={dispatch}

                            contentLabel="Create Note "
                          >
                          <div className="create-note-modal">
                          <button className="close-new-note" onClick={this.closeModal}>close</button>
                              <div className="model-title" >New Note </div>
                                  <form className="create-note-form" onSubmit={this.handleSubmit}>
                
                                    <div className="title-input">
                                        <label className="title">Title</label>
                                        <input type="text" ref="inputTitle"/>
                                    </div>
                                    <div className="body-input">
                                       <label className="body-title">Note Body</label>
                                        <textarea type='text' ref="inputBody"/>  
                                    </div>
                                      
                                    <input className="submit-new-note" type="submit" value="Submit"/>
                              </form>
                          </div>
                            
                          </Modal>
            </div>
            <NotesList notes={notes} 
              
              />
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