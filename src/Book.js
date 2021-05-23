import react from "react"

export const Book=(props)=>{
    //console.log(props)
    return(
    
        <div className="book">
            <img className="book-img" src={props.book.img} />
            <h1>{props.book.title}</h1>
            {/* <p>{p}</p> */}

        
    </div>
    )
}