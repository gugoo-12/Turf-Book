import React from 'react'
import sec from './img/cristiano-ronaldo1.png'

function About() {
  return (
    <div className=' w-[100%] h-[551px] flex justify-center items-center bg-[#ECE3E1]'>
      <div className=' w-[40%]'>
        <img className='' src={sec} alt="" />
      </div>
      <div className=' w-[50%]'>
        <p className=' pb-2 text-xs'>-About us</p>
        <p className=' pb-3 text-4xl font-bold'>Let's Know <a className=' text-orange-600' href="">About us</a></p>
        <p className=' text-justify mb-3'>Lorem ipsum adipisicing elit.partty porro sunt at! Amet odio nulla in iure ut similique, repellat molestias beatae corrupti magni aliquam laborum incidunt quia culpa quisquam ipsa eos, deleniti sunt reprehenderit Vel tempore quod perspiciatis, ipsam error officiis. Adipisci, tenetur.</p>
        <p className=' text-justify'>Lorem ipsum dolor sit amet co Provident fugiat neque, alias deleniti fugit aperiam et sequi, natus aspernatur officiis eos quos? Voluptates, voluptatum cumque inventore quaerat dolores, quod delectus id tenetur error earum aperiam. Labore numquam, quia minus beatae ab necessitatibus nam earum facilis soluta, ea optio dignissimos Nemo.</p>
        <button className=' px-5 py-2 bg-orange-600 text-white rounded mt-3'>Read more</button>

      </div>
    </div>
  )
}

export default About