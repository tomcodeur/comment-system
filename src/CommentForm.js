import React, { Component } from 'react';

class CommentForm extends Component {
    state = {  

        count: 0,
        name: "",
        message: "",
              
    }


    // fonction fléché qui gère le changement de nom

    handleChangeName = (e) => {
        this.setState({
        name:  e.target.value
        })
    }

    // fonction fléché qui gère le changement de la partie message

    handleChangeMessage = (e) => {
        this.setState({
        message:  e.target.value
        })
    }

    // fonction qui gère la soumission via un bouton des informations rentrées dans le formulaire

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.message);
    }

    // Code qui incrémente le nombre de commentaire

    incrementCount = () => {
        this.setState({
          count: this.state.count+1
        })
      }

    render() { 
        return (
            <div className = "columns">
                <div className = "column">
                    <div className="CommentForm">

                        <h2 className="title is-2">Ajouter un commentaire</h2>
                        <form onSubmit={this.handleSubmit} >

                        <h3 className="title is-3">Name</h3>
                        <div class="control">
                        <input className="input" type="text" placeholder="Your name"
                        onChange={this.handleChangeName} 
                        value={this.state.name} />
                        </div>
                        
                        <h3 className="title is-3 --title__mess">Message</h3>
                        <textarea className="textarea" placeholder="Your comment"
                        onChange={this.handleChangeMessage}
                        value={this.state.message}
                        cols="30" rows="10"></textarea>

                        <button onClick={this.incrementCount} className="button is-primary --btn__modif">Envoyer</button>

                        <h3 className="title is-3 --title__mess2">Liste des commentaires ({this.state.count}) </h3>
                        </form>
                    </div>
                </div>
            </div>

          );
    }
}
 
export default CommentForm;