import react from "react"
import BookDetails from "./BookDetails.js"



export const Book=(props)=>{
 
    const handleBookClick=()=>
    {
        console.log("book Clicked");
    <BookDetails />
    
    
}
    //console.log(props)
    return(
    
        <div onClick={ handleBookClick} className="book">
            <img className="book-img" src={props.book.img} />
            <h1>{props.book.title}</h1>
            {/* <p>{p}</p> */}

        
    </div>
    )
}