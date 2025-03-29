import React, { useEffect, useState } from 'react'

export default function Layout() {

  const [html, setHtml] = useState(``)
  const [jsx , setJsx] = useState('')
  useEffect(() => {
    if (html) {
        convertHtmlToJsx();
    }
}, [html]); 

  const convertHtmlToJsx = ()=>{
    console.log(jsx);
    console.log('hii');
    const classFix = html.replaceAll('class=' , 'className=')
    const fixFor = classFix.replaceAll('for=', 'htmlFor=')
    const fixSelfClosing = fixFor.replaceAll(/<(\s*(img|input|br|hr|meta|link)[^>]*?)>/g , '<$1/>')
    setJsx(prev => setStyle(fixSelfClosing))    
    console.log('hii bootm');
  }
  function setStyle(html){
    return html.replaceAll(/style="(.*?)"/g , (match , styles) =>{
      const styleObject = styles.split(';')
      .filter(Boolean)
      .map((e) =>{
        const [key , value] = e.split(':').map((str) => str.trim())
        if(!key || !value) return
        const camelCase = key.replace(/-([a-z])/g , (g) => g[1].toUpperCase())
        return `${camelCase} : "${value}"`
      }).join(', ')
      console.log(styleObject);
      return `style{{${styleObject}}}`
    })
  }
  return (
   <>
    <div className='flex md:flex-row flex-col max-w-[1100px] mx-auto w-full px-8 py-4 gap-3 md:gap-0 md:justify-between min-h-[70vh]'>
      <div className='md:max-h-[500px] min-h-[300px] md:w-[48%] relative shadow-md'>
        <div className='flex items-center justify-between gap-1 py-2 px-4 bg-[#C68EFD] min-w-[80px] cursor-pointer text-center text-white absolute right-2 top-2 rounded '
        onClick={e => {
          navigator.clipboard.writeText(html)
          .then(e => alert('copied'))
        }}
        >HTML <i className="ri-clipboard-line"></i></div>
      <textarea className='w-full h-full border min-h-[300px] resize-none outline-0 rounded py-4 px-4 pt-11' name="" id="" value={html}
      onChange={e => setHtml(e.target.value) } 

      // onPaste={e => {
        
      //   e.preventDefault(); // Prevents default paste behavior
      //   const pastedData = e.clipboardData.getData("text/html") || e.clipboardData.getData("text/plain");
      //   setHtml(pastedData); // Update `html` state first
    
      //   setTimeout(() => {
      //       convertHtmlToJsx(); // Runs after state updates
      //   }, 0);
      // }}
      ></textarea>
      </div>
      <div className='md:w-[48%] relative max-h-[300px] min-h-[300px] md:min-h-[100%] md:max-h-[500px] rounded shadow-md overflow-y-auto'>
      <div className='flex items-center justify-between gap-1 py-2 px-4 bg-[#8F87F1] min-w-[80px] cursor-pointer text-center text-white absolute right-2 top-2 rounded'
      onClick={e => {
        navigator.clipboard.writeText(jsx)
        .then(e => alert('copied'))
      }}
      >JSX <i className="ri-clipboard-line"></i></div>
      <div className='w-full h-full rounded py-4 px-4 pt-11 overflow-y-auto'>{jsx}</div>
      </div>
    </div>
   <div className='flex justify-center mt-4'>
   <button className='bg-blue-400 p-2 cursor-pointer rounded text-white mx-auto' 
   onClick={convertHtmlToJsx}
   >convert</button>
   </div>
   </>
  )
}
