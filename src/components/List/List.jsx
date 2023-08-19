import React, { useState,useEffect } from 'react'
import Block from '../block/Block'
import './list.css'
import Section from '../section/Section'




function List({list,property}) {

    var p=property;



    // const [obj, setObj] = useState({
    //     title: 'Urgent',
    //     cam: 'CAM-4',
    //     desc: 'Add Multi-Language Support',
    //     rest: 'Feature Request',
    //     img: 'head.png'
    // })

    // const [section,setSection]=useState([obj,obj,obj])
    // const [content,setContent]=useState({desc:'Urgent'})
    // if(property==='status')
    if(property==='user')
    p='name'
    if(property==='priority')
    p='priorityName'
    return (

        <div>
            <div className='list'>

                <Block content={list[0][p]} p={p} no={list[0].priority} len={list.length} />
                {
                    list.map((item)=>{
                        return <Section obj={item}/>
                    })
                }
            </div>
        </div>
  )
}

export default List