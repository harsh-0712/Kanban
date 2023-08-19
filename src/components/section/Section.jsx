import React from 'react'
import './section.css'
import Image from '../image/Image'

function Section({obj}) {
    // console.log(obj);
  return (
    <div className='rectangular-block'>
        <div className='top'>
            <p className='obj-pg'>{obj.id}</p>
            {/* <img src={obj.img} alt='img'></img> */}
            <Image name={obj.name}/>
        </div>
        <div className='mid'>
              <h4><input type='checkbox'></input>{obj.priority} {  obj.title}</h4>
        </div>
        <div className='bottom'>
            {
                obj.tag.map((elm)=>{
                    return elm
                })
            }
        </div> 
    </div>
  )
}

export default Section