import React from 'react'




export const Chips = ({chip}) => { 
   
   
   if (chip) {
   const mystyle = {background:chip.color}
   return (<div style={mystyle} className='m-1 w-[2.6vw] h-[2.6vw] transition duration-100 drop-shadow-xl rounded-full justify-self-center'>      
   </div>)
   }
   
   
   return (
   <div className='m-1 w-[2.6vw] h-[2.6vw] transition duration-100 group-hover:bg-slate-300 drop-shadow-xl rounded-full bg-slate-500 justify-self-center'>        
   </div>
)}

