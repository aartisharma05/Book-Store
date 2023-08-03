import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

import {data} from './booksss'
import SpecificBook from './Book'
import { greeting } from './testing/testing';

function Booklist(){
  console.log(greeting)
  return (<section className='booklist'>
    {data.map((book)=>{
    return (
    <SpecificBook key={book.id}  {...book}>

    </SpecificBook>);
  })}
  </section>
  );
}

ReactDom.render(<Booklist/>, document.getElementById('root'));
