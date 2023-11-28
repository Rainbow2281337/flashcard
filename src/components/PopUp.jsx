import React, { useState } from 'react'
import { AiOutlineBell } from 'react-icons/ai'

const PopUp = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

  return (
	<div className='hidden lg:block'>
		<div className={`${click ? 'block' : 'hidden'} absolute top-0 right-0 m-2 md:m-4 border-l-8 border-l-[#E9B824] shadow-xl py-3`}>
			<div className='flex items-center gap-2 mx-2'>
				<div>
					<AiOutlineBell onClick={handleClick} size={30} className='text-[#E9B824] cursor-pointer bellAnimation' />
				</div>
				<div>
					<p className='text-lg md:tracking-wider'>Click plus button to add new flashcard</p>
				</div>
			</div>
		</div>
		{!click ? (
			<div className='absolute top-0 right-0 m-2 md:m-4'>
				<AiOutlineBell onClick={handleClick} size={35} className='text-[#E9B824] cursor-pointer bellAnimation' />
			</div>
		) : ( '' )}
	</div>
  )
}

export default PopUp