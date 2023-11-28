import React, {useState} from 'react'

const FlashCards = ({ onAddCard }) => {
	const [word, setWord] = useState('');
	const [translation, setTranslation] = useState('');
	const [example, setExample] = useState('');

	//function for adding flashcards
	const handleAddFleshcard = (e) => {
		e.preventDefault();

		const newFlashCard = {
			Word: word,
			Translation: translation,
			Example: example,
		};

		onAddCard(newFlashCard);

		setWord('');
		setTranslation('');
		setExample('');
	};

  return (
	<form name='Flashcard' onSubmit={handleAddFleshcard} className='flex flex-col items-center border-2 border-black rounded-2xl w-72 md:w-96 mx-auto p-4 gap-4'>
		<h2 className='text-xl md:text-2xl text-center mb-4 font-bold tracking-wider'>Add New Flashcard</h2>

		<input
			required
			name='word'
			type="text"
			placeholder='Enter word'
			value={word}
			onChange={(e) => setWord(e.target.value)}
			className='border-2 border-black rounded-xl w-full p-2 text-lg tracking-wider'
		/>
		<input
			required
			name='translation'
			type="text"
			placeholder='Enter translation'
			value={translation}
			onChange={(e) => setTranslation(e.target.value)}
			className='border-2 border-black rounded-xl w-full p-2 text-lg tracking-wider'
		/>
		<input
			name='example'
			type="text"
			placeholder='Enter example'
			value={example}
			onChange={(e) => setExample(e.target.value)}
			className='border-2 border-black rounded-xl w-full p-2 text-lg tracking-wider'
		/>

		<button
			type='submit'
			className='mt-4 text-xl md:text-2xl border-2 border-[#219C90] rounded-lg py-1 px-8 bg-[#219C90] text-white font-semibold tracking-wider hover:opacity-80 duration-300'
		>
			Add
		</button>
	</form>
  )
}

export default FlashCards