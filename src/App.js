import React,{useState} from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from "./components/Note";
import "./App.css";
import Footer from './components/Footer';
const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes) => {
      return[...prevNotes,newNote];
    });
  }
 
  function deleteNote(id){
    setNotes((prevNotes) =>{
      return prevNotes.filter((_,index) => {
        return index !== id;
      });
    });
  }  
  
  return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
            {
              notes.map((noteItem,index)=>{
              
                return(
                  <Note 
                    key={index} 
                    title={noteItem.title} 
                    content={noteItem.content}  
                    id={index} 
                    onDelete={deleteNote} 
                  />
                );
              })
            }
            <Footer />
      </div>
  );
};

export default App
