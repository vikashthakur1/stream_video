import React from 'react'


 const Comment = (props) => {
    const {name,comment}= props;
  return (
    <div>
    <p>Name: {name} </p>
    <p>Comment: {comment} </p>
    </div>
  )
}

export default Comment