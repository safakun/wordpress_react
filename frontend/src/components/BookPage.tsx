import React, { FunctionComponent, useState, useEffect } from 'react';  
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'



export const BookPage: FunctionComponent = () => {

    const [book, setBook] = useState<any>({}); 
    const [isLoaded, setisLoaded] = useState(false);
    let { id } = useParams();


    useEffect(() => {
        axios.get(`/newsite/wp-json/wp/v2/books/${id}`).then(res => {
            setBook(res.data);
            setisLoaded(true);
        }).catch(err => console.log(err))
    }, [id])


    if (isLoaded) {
        return (
            <>
            <Link to={'/'}>Go back</Link>
            <hr />
            <h1>{book.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
            <h2>Publisher: {book.acf.publisher}</h2>
            </>
        )
    }



    return (
        <h1>Loading...</h1>
    )
}