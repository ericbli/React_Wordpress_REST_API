import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class BookItem extends Component {
   state={
       imgUrl:'',
       author:'',
       isLoaded: false
   }

  static propTypes={
   book: PropTypes.object.isRequired
  }

componentDidMount(){
    const { featured_media, author }=this.props.book;

    const getImagUrl= axios.get(`https://nortourunited.com/trailshop/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor=axios.get(`https://nortourunited.com/trailshop/wp-json/wp/v2/users/${author}`);
     Promise.all([getImagUrl,getAuthor]).then(res=>{
    //    console.log(res);
       this.setState({
      imgUrl:res[0].data.media_details.sizes.full.source_url,
      author:res[1].data.name,
      isLoaded:true
  });
   });
}

  render() {    
      const{title, excerpt, id}=this.props.book;  
      const {author,imgUrl,isLoaded}=this.state;
      if(isLoaded){
           return (
        <div>
        <h2 style={{marginBottom:'0'}}>{title.rendered}</h2>     {/* 大括号提取参数 */}
         <small>Review by <strong>{author}</strong> </small> 
<img style={{with:'60%'}} src={imgUrl} alt={title.rendered}></img>
        <div dangerouslySetInnerHTML={{__html:excerpt.rendered}}></div>
        {/* <h2>{excerpt.rendered}</h2>    会带有多余的符号*/}
       <Link to={`/book/${id}`}>Book Review</Link> 
              <hr />
        </div>
      )
    }
    return null;
  }
}

export default BookItem
