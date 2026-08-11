import React, { useState } from 'react'
import { MailCheck, MailCheckIcon, MailIcon, Phone ,Play} from 'lucide-react'
import { Mail } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import SplitText from 'gsap/src/SplitText'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin( SplitText, useGSAP);
import { state } from './Store'
import { snapshot, useSnapshot } from 'valtio'
import { watch } from 'valtio/utils'
import { useProgress } from '@react-three/drei'


const Overlay = () => {
    const snap = useSnapshot(state)
        const nav = useRef()
   useGSAP(()=>{
    gsap.from(nav.current,{
        yPercent:-100,
        duration:1.3,
        opacity:0,
        ease:'power1.out'
    })
   })
  return (<>

   <picture className="absolute inset-0 w-full h-full object-cover z-0">
  {snap.intro ? (
    <>
      <source srcSet="/heroimagedesktop.webp" media="(min-width: 768px)" />
      <img 
        src="/heroimagemobile.webp" 
        alt="Geez Hero Background" 
        className="w-full h-full object-cover"
      />
    </>
  ) : (
    <>
      <source srcSet="/configimagedesktop.webp" media="(min-width: 768px)" />
      <img 
        src="/configimagemobile.webp" 
        alt="Geez Configurator Background" 
        className="w-full h-full object-cover"
      />
    </>
  )}
</picture>
      
        

   <section  className='relative w-screen h-screen z-20'>
      
    <nav ref={nav}  className='border-be-2 border-white/20'>
        <ul className=' bg-black/30 mask-t-from-0% text-white/80 font-semibold items-center flex  justify-between md:px-16 px-3 py-3 mt-2  text-1xl'>
            <li className=' text-shadow-amber-600 text-amber-500/50 font-serif pt-2  '>GEEZ</li>
            <ul className='flex gap-10 md:gap-20 bg-black/20  shadow-md  shadow-amber-300/20 rounded-b-md p-3 px-10 '>
           
            <li className='   sm:flex relative group cursor-pointer py-1 hover:text-amber-200'>
                  <button onClick={()=>{state.intro=true ,state.activeTab='watch'}}  className='hover:text-amber-200'>watch</button>
<span className={`absolute bottom-0 left-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${
      snap.activeTab === 'watch' ? 'w-full' : 'w-0'
    }`} />      </li>            
      <li className='relative group cursor-pointer py-1 hover:text-amber-200'>
                  <button onClick={()=>{state.intro=false,
                   state.activeTab='customizaiton'
                  }
                } className='hover:text-amber-200'>customizaiton</button>
<span className={`absolute bottom-0 left-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${
      snap.activeTab === 'customizaiton' ? 'w-full' : 'w-0'
    }`} />      </li>   

    <ul className='hidden md:flex gap-20'>      
      <li className='relative group cursor-pointer py-1 hover:text-amber-200'>
                   <span onClick={()=>{state.activeTab='ring'}} className="">ring</span>
        <span className='absolute bottom-0 left-1/2 w-0 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full' />
      </li>             
      <li className='relative group cursor-pointer py-1 hover:text-amber-200'>
                   <span className=''>strap</span>
        <span className='absolute bottom-0 left-1/2 w-0 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full' />
      </li>
      </ul> 

            </ul>
            <li className='flex gap-5 group cursor-pointer  pt-2  md:pt-0'><Phone className="w-5 h-5" strokeWidth={2} /> <ul className='hidden md:flex bg-amber-900 '><MailIcon className=" w-5 h-5" strokeWidth={2} /></ul></li>
        </ul>
    </nav>
  

    <Hero/>




    </section>

    </>
)
}

export default Overlay


function Pic(){
      <picture className="relative inset-0 w-full h-full object-cover z-0">
    <source srcSet='./heroimagedesktop.png' media="(min-width: 1025px)" />
    <img 
          src="./heroimagemobile.png" 
          alt="Geez Hero Background" 
          className="w-full h-full object-cover"
        />
  </picture>
}


 function Hero(){
    const text1 = useRef()
    const text2 = useRef()
    const text3 = useRef()
    const text4 = useRef()
    const text5 = useRef()
 
    const snap = useSnapshot(state)
    const { progress, active } = useProgress()

   
 useGSAP(()=>{
 const split1text = new SplitText(text1.current, {type:"lines"})
 const split2text = new SplitText(text2.current, {type:"lines"})
 if (active || progress < 100) return


  if(snap.intro) {gsap.from(split1text.lines, {
    yPercent:100,
    duration:1.3,
    opacity:0,
    stagger: 0.1,
     })

    gsap.from(split2text.lines, {
    yPercent:100,
    duration:1,
    opacity:0,
    stagger: 0.1,
    delay:0.3 })
     gsap.to(text3.current, {
   
    opacity:100,
     duration:1.3,
     ease:'expo.out'
     })
     gsap.to(text4.current, {
   
    opacity:100,
     duration:1.3,
     ease:'expo.out'
     })}
     if(snap.intro==false) {gsap.to(split1text.lines, {
    yPercent:100,
    duration:1.3,
    opacity:0,
    stagger: 0.1,
     })

    gsap.to(split2text.lines, {
    yPercent:100,
    duration:1,
    opacity:0,
    stagger: 0.1,
    delay:0.3 })
     gsap.to(text3.current, {
   
    opacity:0,
     duration:0.4,
     ease:'expo.out'
     })
       gsap.to(text5.current, {
   
    opacity:0,
     duration:0.4,
     ease:'expo.out'
     })
     gsap.to(text4.current, {
   
    opacity:0,
     duration:0.4,
     ease:'expo.out'
     })
    
    }
  },[snap.intro,active, progress])




    

    return(<>
   <section className=' relative inset-0 w-screen h-screen z-30'>
        <div  className='text-white/30  mt-50 sm:mt-30 mx-13  flex flex-col '>
            
            <div ref={text5} className='text-orange-100/20 underline text-xs  underline-offset-8 '>THE CRAFTED BEYOND PRECISION</div>
            <div ref={text1} className='  text-white/80 text-5xl sm:text-8xl  text-center sm:text-left mask-b-from-neutral-100 font-serif'>
                Every second <br/> Tells a legacy !
            </div>
            <div ref={text2} className=' text-sm py-5 sm:py-10 pb-15 text-center sm:text-left'>
               Timeless craftsmanship and decades of history, captured in every mechanical tick on your wrist.
                 <div className='hidden sm:flex'>Crafted with timeless precision, a vintage watch carries decades of history right on your wrist.<br/>
                  Each patina mark and mechanical tick tells a story of uncompromised craftsmanship that only grows richer with age.</div>
            </div>
            <div className='flex gap-10 pl-5 z-40 pointer-events-auto'>
                <button ref={text3} className='bg-orange-300/50 text-white/50 font-semibold p-2 shadow hover:bg-orange-300/70 hover:shadow-olive-700/50 hover:text-white  hover:shadow-2xl hover:-translate-y-0.5 pointer-events-auto  hover:scale-100 transition-all duration-300 ease-in-out'>Shop now!</button>
                <button ref={text4} className='flex gap-1.5 items-center border-amber-100/30 border-s text-white/50 font-semibold p-2 shadow   hover:text-white  hover:shadow-2xl hover:shadow-olive-700/50 hover:-translate-y-0.5 pointer-events-auto  hover:scale-100 transition-all duration-300 ease-in-out'> watch Film <Play className="w-5 h-5 fill-black s" strokeWidth={1.5} /></button>

            </div>
<div className="fixed  w-screen pr-30  h-screen mt-40 z-50 pointer-events-none">
{!snap.intro && (
          <>
            
 {(snap.strapType === 'leather' || snap.strapType === 'metal') && <ColorPicker />}
    {snap.strapType === 'Golden' && <ColorPicker1 />}             
    <Custom />
          </>
        )}     </div>
   
        </div>
    </section> </>)}

function Custom() {
  const snap = useSnapshot(state)
  const strapref = useRef()

   useGSAP(()=>{ if(state.intro==false)gsap.from(strapref.current, {
   
    opacity:0,
     duration:3,
     ease:'sine.in'
     })},[snap.intro])
 
  
    return(
        <section className='sm:pr-30'>
        <div ref={strapref} className=' text-amber-50 text-1xl sm:text-lg  inset-0   z-40  text-center   '> 
          
        <ul className=' bg-black/70  mask-t-from-0% text-white/80 font-semibold items-center  flex-row sm:flex sm:flex-1 sm:justify-center gap-30  sm:gap-10 sm:mt-33 sm:py-3 sm:my-14  text-1xl pointer-events-auto '>
           <li className='  sm:flex relative group cursor-pointer py-1  '>
                  <button onClick={()=>{state.strapType='Golden' }} >Golden</button>
<span className={`absolute bottom-0 left-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${
      snap.strapType === 'Golden' ? 'w-full' : 'w-0'
    }`} />      </li>            
            <li className='sm:flex relative group cursor-pointer py-1 '>
                  <button onClick={()=>{state.strapType='metal' }} >Metal</button>
<span className={`absolute bottom-0 left-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${
      snap.strapType === 'metal' ? 'w-full' : 'w-0'
    }`} />      </li>            
            <li className='sm:flex relative group cursor-pointer py-1 '>
                  <button onClick={()=>{state.strapType='leather' }}  >Leather</button>
<span className={`absolute bottom-0 left-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${
      snap.strapType === 'leather' ? 'w-full' : 'w-0'
    }`} />      </li></ul>
     </div>
 
        </section>
    )
    
}
 function ColorPicker() {
  const snap = useSnapshot(state)
  const colorchangeref = useRef(null)
  

     useGSAP(()=>{
    if(state.strapType=='leather')gsap.to(colorchangeref.current, {
      opacity:100,
      duration:2,
      ease:'expo.inOut'
    })
      if(state.strapType=='Golden') gsap.to(colorchangeref.current, {
      opacity:0,
      duration:0.5,
      ease:'expo.out'

    })
          if(state.strapType=='metal') gsap.to(colorchangeref.current, {
      opacity:0,
      duration:0.5,
      ease:'expo.out'

    })

    



  },[snap.strapType])



  // Color palette options with display values and hex colors
  const colors = [
    { name: 'brown', hex: '#bb8663' },
    { name: 'red', hex: '#c23838' },
    { name: 'black', hex: '#000000' } // Swapped duplicate black for brown
  ]

  return (<section > <div ref={colorchangeref} className='text-amber-50 inset-0 z-40 text-center'> 

    <div className="flex justify-end gap-3  ">
      <ul className="flex flex-col gap-4 pointer-events-auto">
        {colors.map((colorItem) => {
          const isSelected = snap.leatherColor === colorItem.hex

          return (
            <li key={colorItem.hex}>
              <button
                type="button"
                onClick={() => {
                  state.leatherColor = colorItem.hex
                }}
                style={{ backgroundColor: colorItem.hex }}
                className={`
                  w-8 h-8 rounded-full border-2 transition-all duration-200 cursor-pointer
                  hover:scale-125
                  ${isSelected ? 'scale-125 border-white ring-2 ring-black shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'}
                `}
                title={colorItem.name}
              />
            </li>
          )
        })}
      </ul>
    </div> </div>

   
    </section> 
  )}

 function ColorPicker1() {
  const snap = useSnapshot(state)
  const colorchangeref = useRef(null)
  

     useGSAP(()=>{
    if(state.strapType=='leather')gsap.to(colorchangeref.current, {
      opacity:0,
      duration:0.5,
      ease:'expo.out'
    })
      if(state.strapType=='Golden') gsap.to(colorchangeref.current, {
    opacity:100,
      duration:2,
      ease:'expo.inOut'

    })
          if(state.strapType=='metal') gsap.to(colorchangeref.current, {
      opacity:0,
      duration:0.5,
      ease:'expo.out'

    })

    



  },[snap.strapType])



  // Color palette options with display values and hex colors
  const colors = [
    { name: 'gold', hex: '#FFDC72' },
    { name: 'white', hex: '#ffffff' },
    { name: 'black', hex: '#000000' } // Swapped duplicate black for brown
  ]

  return (<section > <div ref={colorchangeref} className='text-amber-50 inset-0 z-40 text-center'> 

    <div className="flex justify-end gap-3  ">
      <ul className="flex flex-col gap-4 pointer-events-auto">
        {colors.map((colorItem) => {
          const isSelected = snap.goldcolor === colorItem.hex

          return (
            <li key={colorItem.hex}>
              <button
                type="button"
                onClick={() => {
                  state.goldcolor = colorItem.hex
                }}
                style={{ backgroundColor: colorItem.hex }}
                className={`
                  w-8 h-8 rounded-full border-2 transition-all duration-200 cursor-pointer
                  hover:scale-125
                  ${isSelected ? 'scale-125 border-white ring-2 ring-black shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'}
                `}
                title={colorItem.name}
              />
            </li>
          )
        })}
      </ul>
    </div> </div>

   
    </section> 
  )}

 