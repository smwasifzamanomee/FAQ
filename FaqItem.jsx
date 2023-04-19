import React from 'react'
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({open, toggle, question, answer}) => {
  return (
    <div className='pt-[10px]'>
      <div className='bg-light py-[25px] px-2 flex justify-between items-center' onClick = {toggle}>
        <p className='font-semibold md:text-lg sm:text-sm text-lg'>{question}</p>
        <div className='text-[30px]'>
          {open ? (<AiOutlineMinus/>) : (<AiOutlinePlus/>)}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='px-2 pb-[20px] text-gray-600 text-sm'>{answer}</div>
      </Collapse>
    </div>
  )
}

export default FaqItem
