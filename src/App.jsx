import './App.css'

function App() {

  return (
    <div className="relative h-screen w-full bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-8 py-5'>
          <img src="./src/assets/logo.png" alt="logo" className='h-12' />
        </nav>
        <div className='flex justify-center '>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 rounded-md w-[450px]'>
            <h1 className="text-white text-3xl mb-[28px] font-semibold">Sign In</h1>
            <div className='flex flex-col gap-4'>
              <div className='relative'>
                <input id="email" className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:right-0 peer" placeholder=' ' type='email'></input>
                <label className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'>Email or phone number</label>
              </div>

              <div className='relative'>
                <input id="password" className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:right-0 peer" placeholder=' ' type='password'></input>
                <label className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'>Password</label>
              </div>
            </div>
            
            <button className='bg-red-600 py-3 rounded-md text-white w-full mt-10 hover:bg-red-700 transition'>
              Sign In
            </button>
            <div className='flex my-3 justify-center items-center'>
            <input id="remember_me" type="checkbox" className='h-[16px] w-[16px] border-0'></input><label className='font-normal flex flex-1 text-[#b3b3b3] text-[13px]' >Remember Me</label>
            <div className='text-[#b3b3b3] text-[13px] hover:underline cursor-pointer'>Need Help?</div>
            </div>
            <p className='text-neutral-500 mt-12'>New to Netflix?
              <span className='text-white ml-1 hover:underline cursor-pointer'>
                Sign up now
              </span>.
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App
