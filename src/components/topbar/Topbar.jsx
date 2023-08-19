import React, { useState, useRef, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import Select from 'react-select'
import 'react-dropdown/style.css';
import './topbar.css'




function Topbar({setProperty,setOrder}) {
    const options = [
        {value:'Status',label:'Status'}, {value:'User',label:'User'}, {value:'Priority',label:'Priority'}
    ];

    const options2 = [
        { value: 'Priority', label: 'Priority' }, { value: 'Name', label: 'Name' }
    ];
    
    const [grp,setGrp]=useState(options[0])
    const [ord,setOrd]=useState(options2[0])
    // const [cl,setCl]=useState('')

    const [dp,setDp]=useState(false)
    const show=()=>{
        setDp((d)=>!d)
    }

    // const handleOutsideClick=()=>{
    //     setCl('myMenuClassName')
    // }

    // useEffect(() => {
    //     window.addEventListener('click', handleOutsideClick);
    //     return () => {
    //         window.removeEventListener('click', handleOutsideClick);
    //     };
    // }, []);

 

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
                          {/* <Dropdown
                              className='drop'
                              options={options}
                              onChange={(e) => {setProperty(e.value.toLowerCase()); setGrp(e)}}
                              value={grp}
        
                          /> */}
                                  <Select
                                      value={grp}
                                      required
                                      onChange={(e) => { setProperty(e.value.toLowerCase()); setGrp(e) }}
                                      className='drop'
                                      styles={{
                                        //   control: (baseStyles, state) => ({
                                        //       ...baseStyles,
                                        //       borderColor: 'black',
                                        //       backgroundColor: 'rgba(10, 180, 180, 0.2)'
                                        //   }),
                                        //   option: (baseStyles, state) => ({
                                        //       ...baseStyles,
                                        //       borderColor: state.isFocused ? 'black' : 'red',
                                        //       backgroundColor: state.isFocused ? 'black' : 'rgba(10, 180, 180, 1)',
                                        //   }),
                                        //   singleValue: (baseStyles, state) => ({
                                        //       ...baseStyles,
                                        //       backgroundColor: 'rgba(10, 180, 180, 1)'
                                        //   }),
                                      }}
                                      options={options}
                                    //   className="basic-multi-select inputFields"
                                      classNamePrefix="select inputFields"
                                  />
                      </div>
                </div>
                <div className='ft'>
                    <div><p>Ordering</p></div>
                        <div>
                            {/* <Dropdown
                                className='drop'
                                options={options2}
                                onChange={(e) => {setOrder(e.value.toLowerCase()); setOrd(e) }}
                                value={ord}
                            /> */}
                                  <Select
                                        value={ord}
                                      required
                                      onChange={(e) => { setOrder(e.value.toLowerCase()); setOrd(e) }}
                                      className='drop'
                                      styles={{
                                          //   control: (baseStyles, state) => ({
                                          //       ...baseStyles,
                                          //       borderColor: 'black',
                                          //       backgroundColor: 'rgba(10, 180, 180, 0.2)'
                                          //   }),
                                          //   option: (baseStyles, state) => ({
                                          //       ...baseStyles,
                                          //       borderColor: state.isFocused ? 'black' : 'red',
                                          //       backgroundColor: state.isFocused ? 'black' : 'rgba(10, 180, 180, 1)',
                                          //   }),
                                          //   singleValue: (baseStyles, state) => ({
                                          //       ...baseStyles,
                                          //       backgroundColor: 'rgba(10, 180, 180, 1)'
                                          //   }),
                                      }}
                                      options={options2}
                                    //   className="basic-multi-select inputFields"
                                      classNamePrefix="select inputFields"
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




