import React from 'react';

const Book =({img, title,author})=>{
  // const {img, title,author} = props;
//  console.log(props)
//attribute,eventhandler
//onClick, onMouseOver

const clickHandler = (e)=>{
  console.log(e);
  console.log(e.target);
alert('helloo world');
}

const complexExample = (author)=>{
  console.log(author)
}
  return (
    <article className='book' onMouseOver={()=>{
      console.log(author);
    }}>
    <img src={img} alt=''/>
    <h1 onClick = {()=>console.log({title})}>{title} </h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>reference example</button>
     <button type="button" onClick={()=>complexExample(author)}>complex example</button>
    </article>
  );  
}

export default Book;
