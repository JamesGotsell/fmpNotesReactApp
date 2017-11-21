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
 
    render() {
  
      const { dispatch,  text, title } = this.props

      return (
  
        <div>  
                <Modal
                      isOpen={this.state.isModalOpen}
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
                 <button onClick={() => {this.openModel()} } >View Note</button>
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