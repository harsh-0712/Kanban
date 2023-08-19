import React from 'react'
import Image from '../image/Image'
import './block.css'

function Block({content,p,no,len}) {
  const map=new Map([[0,'./dots.png'],[1,'./low.png'],[2,'./medium.png'],[3,'./high.png'],[4,'./warning.png']]);
  const map2 = new Map([['In progress', './work-in-progress.png'], ['Todo', './list.png'], ['Canceled', './multiply.png'], ['Done', './check.png'], ['Backlog', './processing.png']]);
  console.log(p,no);
  return (
    <div className='prnt'>
        <span className='f'>
            {p==='status' && <img src={map2.get(content)} alt='icon'></img>}
            {p==='priorityName' && <img src={map.get(no)} alt='icon'></img>}
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