import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './topbar.css'

function Topbar({setProperty,setOrder}) {
    const options = [
        'Status', 'User', 'Priority'
    ];

    const options2 = [
        'Priority', 'Name'
    ]

    const [grp,setGrp]=useState(options[0])
    const [ord,setOrd]=useState(options2[0])

    const [dp,setDp]=useState(false)

    const show=()=>{
        setDp((d)=>!d)
    }

  return (
    <div>
        <div className='topbar'>
            <button className='button-30' onClick={show} role='button'><img src='./settings.png'></img><p>Display</p></button>
        </div>
      <div class="dropdown">
          {
            dp && 
            <div className='upper'>
                <div className='ft'>
                    <div><p>Grouping</p></div>
                      <div>
                          <Dropdown
                              className='drop'
                              options={options}
                              onChange={(e) => {setProperty(e.value.toLowerCase()); setGrp(e)}}
                              value={grp}
                          />
                      </div>
                </div>
                <div className='ft'>
                    <div><p>Ordering</p></div>
                        <div>
                            <Dropdown
                                className='drop'
                                options={options2}
                                onChange={(e) => {setOrder(e.value.toLowerCase()); setOrd(e) }}
                                value={ord}
                            />
                    </div>
                </div>
            </div>
          }
      </div>
    </div>
  )
}

export default Topbar




