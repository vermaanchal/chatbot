import React, { useState } from 'react'
import './App.css';
import ReactSwitch from "react-switch";
import './image.css'
const Chatbot = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <div className='main pb-3'>
            <div className='pt-2 '>
                <div className='d-flex justify-content-evenly pt-2 '>
                    <div className=''>
                        <img src='/images/srkProfile.png' className='profile'></img>
                        <img src='/images/chat.png' className='profile'></img>
                    </div>
                    <div className=' '>
                        <p className='para'>Interactive with Shahrukh's Licensed AI Persona</p>
                    </div>
                    <div className='switch-btn'>
                        {/* <ReactSwitch
                            checked={isToggled}
                            onChange={handleToggle}
                            className="react-switch"
                        /> */}
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className='mobilehide'>
                        <p className='avatar'>Avatar</p>  </div>
                    <div className='mobilehide'>
                        <button className='topbtn'><img src='/images/icons/ic_chat.png'></img>End Chat Session</button>
                    </div>
                </div>
                <div className={`background-image ${isToggled ? 'image-active' : ''}  mx-3  pb-3 chatdiv`}>
                    <div className=' chatbox'>
                        <div className='row'>
                            <div className=' col-lg-6 col-md-12 col-sm-12'></div>
                            <div className=' col-lg-6 col-md-12 col-sm-12'>
                                <div className='d-flex senderchat'>
                                    <div>
                                        <img src='/images/chat.png' className='profile mx-2'></img>
                                    </div>
                                    <div><p className='sendpara'>Who are some of your favorite directors to work with? </p></div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex my-3 receiverchat'>
                                <div >
                                    <img src='/images/chatsrk.png' className='profile mx-2'></img>
                                </div>
                                <div>
                                    <p className='receivepara'> I share a very special bond with Karan. We have worked together in several
                                        blockbusters like  'Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham',
                                        and 'My Name is Khan'. His ability to handle  complex human relationships
                                        in films is outstanding.</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <img src='/images/icons/ic_share.png' className='icons' />
                                <img src='/images/icons/ic_like.png' className='icons' />
                                <img src='/images/icons/ic_dislike.png' className='icons' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-lg-6 col-md-12 col-sm-12'></div>
                            <div className=' col-lg-6 col-md-12 col-sm-12'>
                                <div className='d-flex senderchat'>
                                    <div>
                                        <img src='/images/chat.png' className='profile mx-2'></img>
                                    </div>
                                    <div><p className='sendpara'>Who are some of your favorite directors to work with? </p></div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex my-3 receiverchat'>
                                <div >
                                    <img src='/images/chatsrk.png' className='profile mx-2'></img>
                                </div>
                                <div>
                                    <p className='receivepara'> I share a very special bond with Karan. We have worked together in several
                                        blockbusters like  'Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham',
                                        and 'My Name is Khan'. His ability to handle  complex human relationships
                                        in films is outstanding.</p>
                                </div>
                                {/* <img src=''/> */}
                            </div>
                            <div className='mt-3'>
                                <img src='/images/icons/ic_share.png' className='icons' />
                                <img src='/images/icons/ic_like.png' className='icons' />
                                <img src='/images/icons/ic_dislike.png' className='icons' />
                            </div>
                        </div>
                    </div>
                    <div className='row mx-1'>
                        <div className='col-lg-9 col-md-9 col d-flex'>
                            <input type='text' placeholder='start typing your message here..' className='form-control'>
                            </input>
                            <div className='sendimg'>
                                <img src='/images/icons/ic_send.png' className='icons' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col  inputicon'>
                            <img src='/images/icons/ic_audio.png' className='icons' />
                            <img src='/images/icons/ic_mic.png' className='icons' />
                            <img src='/images/icons/ic_reload.png' className='icons' />
                            <img src='/images/icons/ic_copy.png' className='icons' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbot