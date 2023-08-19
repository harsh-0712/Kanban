import React from 'react'
import Image from '../image/Image'
import './block.css'

function Block({content,p,len}) {
  return (
    <div className='prnt'>
        <span className='f'>
            {p!=='name' && <img src="./signal-status.png" alt='icon'></img>}
            {p==='name' && <Image name={content}/> }
            <p>{content}</p>
            <p>{len}</p>
        </span>
        <span className='s'>
            <img src='plus.png' alt='icon'></img>   
            <img src='more.png' alt='icon'></img>
        </span>
    </div>

  )
}

export default Block