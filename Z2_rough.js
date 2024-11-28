<div className='flex flex-col relative box h-full w-full border-solid border-2 rounded-3xl shadow-xl'>
{/* Left chat */}
<div className='absolute left-1 px-1 py-1 w-[70%] flex mx-3 my-2 gap-2 '>
    <div className="profile"> 
        < GiSnake size={30}/>
    </div>
    <div className="content">
        <h1 className='web'>Hello! I am a chatbot. I am here to help you generate a song. You can ask me anything!</h1>         
    </div>
</div>
{/* Right chat */}
<div className='absolute right-1 px-1 py-1 w-[70%] flex mx-3 my-2 gap-2 '>
    <div className="profile"> 
        < GiPlagueDoctorProfile size={30}/>
    </div>
    <div className="content">
        <h1 className='web'>Hello! I am a chatbot. I am here to help you generate a song. You can ask me anything!</h1>         
    </div>
</div>

</div>