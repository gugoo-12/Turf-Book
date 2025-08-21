import React from 'react'
import first from './img/football-1419954_1920.jpg'
import sec from './img/football-4455306_1920.jpg'
import thi from './img/football-488714_1920.jpg'
import four from './img/man-7813108_1920.jpg'
import five from './img/soccer-7392844_1920.jpg'
import six from './img/stadium-1590576_1920.jpg'
import sev from './img/stadium-5196878_1920.jpg'
import eig from './img/boy-7056003_1920.jpg'
<img src="" alt="" />
const abcd = [
  {
    pic: first,
    title: "Dhaka Meadow Field",
    rate: "4.7",
    dist: "1.5mi",
    player: "12 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,200/hr"
  },
  {
    pic: sec,
    title: "Dribbing Indoor Field",
    rate: "4.8",
    dist: "1.8mi",
    player: "10 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,100/hr"
  },
  {
    pic: thi,
    title: "Royal Indoor Field",
    rate: "5.0",
    dist: "2.5mi",
    player: "12 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,200/hr"
  },
  {
    pic: four,
    title: "Red Indoor Field",
    rate: "4.2",
    dist: "2.5mi",
    player: "10 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,000/hr"
  },
  {
    pic: five,
    title: "Kids Villa Playground",
    rate: "4.7",
    dist: "1.5mi",
    player: "12 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "800/hr"
  },
  {
    pic: six,
    title: "Cossbar Ground",
    rate: "4.8",
    dist: "1.5mi",
    player: "10 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,100/hr"
  },
  {
    pic: sev,
    title: "Dhaka Ground Field",
    rate: "5.0",
    dist: "2.5mi",
    player: "12 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,400/hr"
  },
  {
    pic: eig,
    title: "United Indoor Field",
    rate: "4.2",
    dist: "2.5mi",
    player: "10 players",
    pera: "The href attribute the navigable address as the href value.",
    price: "1,100/hr"
  }
]

function Whyus() {
  return (
    <div className=' bg-[#EBEBEB] w-[100%] h-full'>
      <div className=' text-center'>
        <p className=' text-3xl font-bold pt-3'>Explore <a className=' text-orange-600' href="">Nearby Turf</a></p>
        <p className=' text-[15px] mt-5 text-[#909192] leading-3'>Lorem ipsum dolor sit amet elit deleniti officia laboriosam voluptatem veniam voluptatum nesciunt</p>
        <p className=' text-[15px] text-[#909192]'>Lorem ipsum dolor sit.</p>
      </div>
      <div className=' flex flex-wrap gap-5 justify-center mt-8'>
        {abcd?.map((i) => {
          return (
            <>
              <div>
                <div className=' w-[250px] bg-white p-3 rounded-2xl'>
                  <img className=' rounded-t-lg mb-2' src={i.pic} alt="" />
                  <p className=' text-gray-700 mb-1 '>{i.title}</p>
                  <div className=' flex  text-xs text-gray-600 items-center gap-4'>
                    <div className=' flex shadow-[0_1px_3px_1px_lightgray] rounded-2xl bg-white p-1 pr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#EA580C" d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z" /></svg>
                      <p className=' text-xs'>{i.rate}</p>
                    </div>
                    <div className=' flex shadow-[0_1px_3px_1px_lightgray] rounded-2xl p-1 pr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#EA580C" d="M12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472" /></svg>
                      <p>{i.dist}</p>
                    </div>
                    <div className=' flex shadow-[0_1px_3px_1px_lightgray] rounded-2xl p-1 pr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="#EA580C" stroke="#EA580C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 17l5 1l.75-1.5M15 21v-4l-4-3l1-6" /><path d="M7 12V9l5-1l3 3l3 1" /></g></svg>
                      <p>{i.player}</p>
                    </div>
                  </div>
                  <p className=' text-sm text-gray-400 mt-2 leading-4 mb-4 '>{i.pera}</p>
                  <div className=' flex justify-between mb-1'>
                    <p className=' text-gray-700'>{i.price}</p>
                    <button className=' text-sm bg-orange-600 px-3 py-1 rounded text-white'>Book Now</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className=' mt-10 pb-10 flex justify-center gap-2'>
        <div className=' w-6 h-2 bg-orange-600 rounded-xl'></div>
        <div className=' w-2 h-2 bg-orange-300 rounded-xl'></div>
        <div className=' w-2 h-2 bg-orange-300 rounded-xl'></div>
        <div className=' w-2 h-2 bg-orange-300 rounded-xl'></div>
        <div className=' w-2 h-2 bg-orange-300 rounded-xl'></div>
      </div>
    </div>
  )
}

export default Whyus