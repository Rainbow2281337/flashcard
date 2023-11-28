import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlineCursorClick } from 'react-icons/hi'

const Card = ({word, translation, example, onDelete, onEdit }) => {
	const [flipCard, setFlipCard] = useState(false);

  //if true, show translation and example. If false, show word
	const handleFlipCard = () => {
		setFlipCard(!flipCard);
	}

  return (
	<div
      onClick={handleFlipCard}
      className='bg-[#E9B824] text-white font-semibold min-w-[192px] min-h-[192px] rounded-xl flex items-center justify-center cursor-pointer relative'
    >
      {flipCard ? (
        <div className='text-center'>
          <p className='text-xl md:text-2xl px-2'>{translation}</p>
          <p className='text-xl mt-2 px-2'>{example}</p>
		    </div>
      ) : (
        <p className='text-xl md:text-2xl uppercase px-2'>{word}</p>
      )}
      <AiFillDelete onClick={onDelete} size={20} className='absolute top-0 right-0 m-2 hover:text-[#D83F31] duration-300' />
      <HiOutlineCursorClick size={20} className='absolute top-0 left-0 m-2' />
    </div>
  )
}

export default Card