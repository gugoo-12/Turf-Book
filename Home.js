import React from 'react'
import first from './img/cristiano-ronaldo-bicycle.png'

function Home() {
  return (
    <div className=' w-[100%] h-[551px] bg-gradient-to-b from-[#141C2E] to-[#491d3f] flex justify-around'>
      <div className=' text-white pt-28'>
        <p className=' text-[#CDD1D4] text-xl mb-6'>Have any sports plan today? </p>
        <h1 className=' text-5xl mb-2'>Score Big with <a className=' text-orange-600'>Seamless</a></h1>
        <h1 className=' text-5xl'>Sports Booking.</h1>
        <div className=' flex bg-[#49334F] justify-between rounded-md mt-11 '>
          <div className=' flex hover:bg-orange-600 h-16 items-center px-4 rounded-s-md '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#EA580C"d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
            <p>Enter location</p>
          </div>
          <div className=' flex gap-1 h-16 items-center px-4 hover:bg-orange-600 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#EA580C" d="M14.986 7.382a.5.5 0 0 1 .013.152c.014.4-.133.806-.439 1.112l-2.12 2.122a.5.5 0 1 1-.708-.708L13.792 8H1.5a.5.5 0 0 1 0-1h12.121l-1.889-1.89a.5.5 0 0 1 .707-.706l2.121 2.12a1.5 1.5 0 0 1 .426.858M1.5 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 8h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1"/></svg>
            <p>Game-Category</p>
          </div>
          <div className=' flex gap-1 h-16 items-center px-4 hover:bg-orange-600 rounded-e-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#EA580C" d="M12.048 11.074L15 14.025l-.975.975l-2.951-2.952A6.205 6.205 0 0 1 1 7.202A6.205 6.205 0 0 1 7.203 1a6.205 6.205 0 0 1 4.845 10.074m-1.382-.512a4.823 4.823 0 0 0-3.463-8.184a4.823 4.823 0 0 0-4.825 4.825a4.823 4.823 0 0 0 8.184 3.463zM8.015 4.567a1.379 1.379 0 1 0 1.823 1.824a2.758 2.758 0 1 1-5.392.812a2.757 2.757 0 0 1 3.569-2.636"/></svg>
            <p>Find Turf</p>
          </div>
        </div>
      </div>
      <div className=' overflow-hidden'>
        <img src={first} alt="" />
      </div>

    </div>
  )
}

export default Home