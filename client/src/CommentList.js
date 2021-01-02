import axios from 'axios';
import React from 'react'

const CommentList = ({comments}) => {
  

    const renderedPosts = comments.map(comment => {
        let content;

        if(comment.status === 'approved'){
            content = comment.content;
        }
        if(comment.status === 'rejected'){
            content = 'This comment has been rejected';
        }

        if(comment.status === 'pending'){
            content = 'This comment is awaiting moderation';
        }

        
        return (
        <li key={comment.id}>{content}</li>
        );
    }) 
    return ( 
        <ul>
            {renderedPosts}

        </ul>
    )
}

export default CommentList;