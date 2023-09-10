import React, { FunctionComponent, useState, useEffect } from 'react'; 
import axios from 'axios';

import { Link } from "react-router-dom";

type BookProps = {
    book: any
  }


export const BookItem: FunctionComponent<BookProps> = ({ book }) => {

    const [imgUrl, setImgUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`/newsite/wp-json/wp/v2/media/${book.featured_media}`)
        .then((res: any) => {
            setImgUrl(res.data.media_details.sizes.full.source_url);
           // console.log(res)
        })
        .catch(err => console.log(err));

        axios.get(`/newsite/wp-json/wp/v2/user/${book.author}`).then((res: any) => {
            setAuthor(res.data.name);
        }).catch(err => console.log(err));

        setIsLoaded(true);

        // Promise.all([getImageUrl, getAuthor]).then(res => {
        //     setImgUrl(res[0].data.media_details.sizes.full.source_url);
        //     setAuthor(res[1].data.name);
        //     setIsLoaded(true)
        // })


    }, [book])


    if(isLoaded) {
        return (

            <div className="card col-md-4">
  <img src={ imgUrl } className="card-img-top" alt={book.title.rendered} />
  <div className="card-body">
    <h5 className="card-title">{book.title.rendered}</h5>
    <p dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }} className="card-text"></p>
    <Link to={'/book/' + book.id } className="btn btn-primary">Review</Link>
  </div>
</div>
           
        )
    }

    return null;
}