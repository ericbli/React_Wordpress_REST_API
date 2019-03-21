import React, { Component,Fragment } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export class BookPage extends Component {
  state={
    book:{},
    isLoaded: false
  }

  componentDidMount() {
    console.log("A111111111111111111111"+this.props.match.params.id);   console.log(this);
    console.log("aaaaaaaaaaa"+this.props.match.params.title);  
     axios.get(`https://nortourunited.com/trailshop/wp-json/wp/v2/books/${this.props.match.params.id}`)    //  参数id匹配的
    .then(
 
      res=>{
        console.log(res);
        this.setState(
     {book: res.data,
       isLoaded: true
      } 
    )})
    .catch(err=>console.log(err));
  }
  render() {
    
    const{book, isLoaded}=this.state;   console.log("oooooooooooooooo"+this);
    if(isLoaded){
      console.log(book); console.log("BBBBBBBBBBBBBBBBBBBB");
      console.log(isLoaded); console.log("ccccccccccccccccc");
    return (
     
      <Fragment>
        <Link to='/'>Go Back</Link>
        <hr/>
        <h2 style={{marginBottom:'0'}}>{book.title.rendered}</h2>     {/* 大括号提取参数 */}
        <div dangerouslySetInnerHTML={{__html: book.content.rendered}}></div>
        <h4>Price:{book.acf.price} USD </h4>
       
        <img style={{with:'60%'}} src={book.acf.imgurl} alt="New Products"></img>
      </Fragment>
    )
  }
  return <h3>Loading......</h3>
  }
}

export default BookPage
