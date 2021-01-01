import axios from 'axios';
import React from 'react'

const CommentList = ({comments}) => {
  

    const renderedPosts = comments.map(comment => {
        return (
        <li key={comment.id}>{comment.content}</li>
        );
    }) 
    return ( 
        <ul>
            {renderedPosts}

        </ul>
    )
}

export default CommentList;