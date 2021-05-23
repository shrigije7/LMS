import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import {Book} from './Book'
import FetchWrapper from "./FetchWrapper"
const books=require ('./books.json')
function App() 
  
  
  {
    const Books=books.books;
  return (
    <div className="App">
      <Header />
      <div className="container">
      
      {console.log(books.books)}
     { Books.map((book,key)=>
      
        <Book book={book} key={key} />
      )}
      
      
      </div>
    </div>
  );
}

export default App;
