import { useState, useEffect } from 'react'
import FlashCards from './components/FlashCards';
import { AiOutlinePlus, AiOutlineMinusCircle } from 'react-icons/ai'
import Card from './components/Card';
import PopUp from './components/PopUp';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [addCard, setAddCard] = useState(false);

   //function adds a new flashcard to the existing array of flashcards
  const handleAddFlashcard = (newFlashcard) => {
    const updatedFlashcards = [...flashcards, newFlashcard];

    setFlashcards(updatedFlashcards);
    saveCardsToLocalStorage(updatedFlashcards);
  };

  //if true, showing form for adding flashcard
  const handleAddCard = () => {
		setAddCard(!addCard);
	};

  //function for deleting flashcards
  const handleDeleteCard = (index) => {
    const updatedFlashcards = [...flashcards];

    updatedFlashcards.splice(index, 1);

    setFlashcards(updatedFlashcards);
    saveCardsToLocalStorage(updatedFlashcards);
  };

  //saving items to local storage
  const saveCardsToLocalStorage = (flashcards) => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('flashcards'));

    if (items) {
      setFlashcards(items);
    }
  }, []);

  return (
    <div>
      <nav className='mt-4 mb-8'>
        <ul className='flex items-center justify-center'>
          <li title='Add Flashcard' onClick={handleAddCard} className='cursor-pointer'>
            {addCard ? ( <AiOutlineMinusCircle size={35} className='bg-[#219C90] text-white rounded-full' /> ) : ( <AiOutlinePlus size={35} className='pulsatingPlus' /> )}
          </li>
        </ul>
      </nav>

      {addCard ? ( <FlashCards onAddCard={handleAddFlashcard} /> ) : ( <PopUp /> )}

      <div className='flex flex-wrap gap-8 items-center justify-center my-8 mx-1'>
        {flashcards.map((flashcard, index) => (
          <Card
            key = {index}
            word = {flashcard.Word}
            translation = {flashcard.Translation}
            example = {flashcard.Example}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default App
