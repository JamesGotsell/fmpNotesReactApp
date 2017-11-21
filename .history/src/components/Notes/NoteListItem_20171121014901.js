import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions';
import Modal from 'react-modal';


class NoteListItem extends React.Component {
  
  constructor(props){
    super(props)
      console.log(props)
       this.closeModal = this.closeModal.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    closeModal() {
      this.props.toggleModal()
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
  
      const { dispatch, isOpen, text, title } = this.props

      return (
  
        <div>  
               
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