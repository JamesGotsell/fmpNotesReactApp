import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions';
import Modal from 'react-modal';


class NoteListItem extends React.Component {
  
  constructor(props){
    super(props)
      console.log(props)
      this.state = {
        isModalOpen: false 
      }
       this.closeModal = this.closeModal.bind(this)
       this.openModel = this.openModel.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
    openModel() {
      this.setState({ isModalOpen:true})
    }
    closeModal() {
      this.setState({ isModalOpen: false})
      // this.props.toggleModal()
    }
 
    handleSubmit(event) {
      
         let inputTitle = this.refs.inputTitle.value;
         let inputBody = this.refs.inputBody.value
         event.preventDefault();
         if(inputTitle && inputBody !==""){
           this.props.dispatch(actions.editNote({title:inputTitle, text:inputBody, id:this.props.id}))
         }
         this.closeModal()
       }


    render() {
  
      const { dispatch,  text, title } = this.props

      return (
  
        <div>  
                <Modal
                      isOpen={}
                      onRequestClose={this.props.closeModal}
                      dispatch={this.props.dispatch}
                      contentLabel="View Note "
                >
                                <button onClick={this.closeModal}>close</button>
                            <div> view Note </div>
                            <p>{this.props.title}</p>
                            <p>{this.props.text}</p>
                             
              </Modal>
          <div className="notes"> 
               
                <p>{this.props.title}</p> -  <p>{this.props.id}</p>
                {/* <button onClick={() => {toggleModal()} } >View Note</button> */}
                {/* <button onClick={() => {this.props.dispatch(actions.deleteNote({id:this.props.id}))} }>delete</button> */}

          </div>
        </div>
      )
    }
  }



  const mapDispatchToProps = dispatch => ({
    dispatch
  })



  export default connect(
    mapDispatchToProps
  )(NoteListItem)