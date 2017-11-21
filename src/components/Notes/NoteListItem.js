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
  
      const { text, title } = this.props

      return (
  
        <div className="note-item-container">  
                <Modal
                      isOpen={this.state.isModalOpen}
                      onRequestClose={this.props.closeModal}
                      
                      contentLabel="View Note "
                >
                <div className="view-note">
                  <button className="view-note-close" onClick={this.closeModal}>close</button>
                            <div className="view-note-data-container"> 
                                  <h2>Note</h2>
                                    <p>{title}</p>
                                  <p>{text}</p>
                            
                           </div>
                            
                </div>          
              </Modal>
          <div className="notes"> 
               
               <div>
                    <p>{this.props.title}</p> -  <p>{this.props.id}</p>
                      <br/>
                      <button class="view-note" onClick={() => {this.openModel()} } >View Note</button>
               </div>
              
          </div>
        </div>
      )
    }
  }

  export default NoteListItem