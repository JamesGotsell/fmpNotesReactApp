import React from 'react'
import Modal from 'react-modal';


class NoteListItem extends React.Component {
  
  constructor(props){
    super(props)
      console.log(props)
      /// localState for view Note Model
      this.state = {
        isModalOpen: false 
      }
       this.closeModal = this.closeModal.bind(this)
       this.openModel = this.openModel.bind(this)
    }
    openModel() {
      this.setState({ isModalOpen:true})
    }
    closeModal() {
      this.setState({ isModalOpen: false})
    }
 
    render() {
  
      const { dispatch,  text, title } = this.props

      return (
  
        <div>  
                <Modal
                      isOpen={this.state.isModalOpen}
                      onRequestClose={this.props.closeModal}
                      
                      contentLabel="View Note "
                >
                  <button onClick={this.closeModal}>close</button>
                            <div> View Note </div>
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

  export default NoteListItem