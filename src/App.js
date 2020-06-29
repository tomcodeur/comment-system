import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { 
    comments: [  
      // { id: 1,name: "", message: ""},
      // { id: 2, name: "", message: ""}
    ]
   }

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message
    }
    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }

  render() { 

    return ( 
      <div className="App container">

        <AdminMode isAdmin={this.state.isAdmin}/>

        <CommentForm addComment={this.addComment} />

        <CommentList comments={this.state.comments} />

      </div>
     );
  }
}
 
export default App;