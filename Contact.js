import React from 'react'
import fir from './img/football.png'

function Contact() {
  return (
    <div className=' bg-[#EBEBEB] w-[100%] h-full pt-16 '>

      <div className=' w-[85%] flex justify-center gap-20 bg-[#EDDFD6] mx-auto rounded-xl py-16 mb-14'>
        <div className=' w-[40%]'>
          <p className=' text-4xl font-bold'>Enlist Your turf & <a className=' text-orange-600 ' href="">Get</a></p>
          <p className=' text-4xl font-bold text-orange-600'>Bookings.</p>
          <p className=' text-sm pb-5 pt-4'>Lorem, ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. consectetur adipisicing elit. Ipsa, distinctio.</p>
          <button className=' text-sm bg-orange-600 px-5 py-2 rounded text-gray-200'>Enlist Now</button>
        </div>
        <div className='w-[25%]'>
          <img className=' w-[100%]' src={fir} alt="" />
        </div>
      </div>

      <div className=' bg-[#10202F] text-gray-300'>

        <div className=' w-[90%] pb-4 mx-auto border-b-2'>

          <p className=' text-3xl pt-12 pb-8'>Tu rf<a>BOOK</a></p>

          <div className=' flex justify-between'>
            <div>
              <p className=' text-2xl pb-4'>Customer support</p>
              <div>
                <div className=' flex gap-1 pb-2 text-[14px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732" /></svg>
                  <p>24/4A Thoothoor</p>
                </div>
                <div className=' flex pb-2 gap-1 text-[14px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" /></svg>
                  <p>74645378373</p>
                </div>
                <div className=' flex pb-2 text-[14px] gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" /></svg>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className=' text-2xl pb-4'>Navigation</h1>
              <p className=' pb-2 text-[14px]'>Home </p>
              <p className=' pb-2 text-[14px]'>About</p>
              <p className=' pb-2 text-[14px]'>Contact</p>
              <p className=' pb-2 text-[14px]'>Whyus</p>
            </div>
            <div>
              <h1 className=' text-2xl pb-4'>Social links</h1>
              <div className=' flex items-center'>
                <div className=' w-[250px] text-xs h-8 bg-[#414D59] rounded-s-md'>
                  <p className=' my-2 mx-3'>Email </p>
                </div>
                <div className=' w-[45px] h-8 bg-orange-600 px-2 py-1 rounded-e-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" /></g></svg></div>
              </div>
              <div className=' flex gap-4 pt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-[90%] text-xs flex justify-between mx-auto py-5'>
          <p>Copyright © 2023 eLearningn,All right Reserved</p>
          <p>Privacy Policy | Trams&Condition</p>
        </div>
      </div>
    </div>
  )
}

export default Contact