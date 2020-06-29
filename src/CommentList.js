import React, { Component } from 'react';

class CommentList extends Component {

    deleteTodo(e) {
        e.preventDefault();
        let remove = this.state.filter(state => state !== state.value);
        this.setState({
            remove : remove
        });
    }

    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id} >
                        <span className="name__text">{comment.name}</span> <span className="comment__text">{comment.message}</span>
                        <button class="delete" onClick={this.deleteTodo.bind(this)}></button>
                        <hr/>
                    </li>
         })

        return (
                <div className="column">
                    <ul className="comment-list">
                        {commentsList}
                    </ul>
                </div>
          );
    }
}
 
export default CommentList;