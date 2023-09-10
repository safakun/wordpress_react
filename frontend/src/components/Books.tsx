import React, { FunctionComponent, useState, useEffect } from 'react'; 
import axios from 'axios';

import { BookItem } from './BookItem';
import { Navbar } from './Navbar';

export const Books: FunctionComponent = () => {

const [books, setBooks] = useState([])
const [isLoaded, setIsLoaded] = useState(false)


useEffect(() => {

    axios.get('/newsite/wp-json/wp/v2/books')
    .then(res => {
        setBooks(res.data);
        setIsLoaded(true);
    })
    .catch(err => console.log(err))
}, [])

// console.log(books)

if (isLoaded) {
    return (
        <>
        <Navbar />
         <div className="row">
            {books.map((book: any) => (
               <BookItem key={book.id} book={book} />

            ))}
        </div>
        </>
       
    )
}
    return (
        <h1>Loading...</h1>
    )
} 