import React from 'react'

const Footer = () => {
  const downloadPdf = () => {
    const url = '/assets/KWASI_ANTWI_BAAYEH.pdf';
    window.open(url, '_blank')
  }
  
  return (
    <footer className='relative'>
      <div className='bg-footer-bg bg-cover bg-no-repeat bg-center bg-fixed h-98 opacity-20'></div>
      <div className="footer content absolute w-full top-0 p-4 md:px-14">
        <h3 className='text-2xl border-b border-gray-500'>Stacks under my belt</h3>
        <ul className='mt-5 grid grid-cols-3 gap-7'>
          <li>React</li>
          <li>Redux</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Tailwindcss</li>
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Git</li>
          <li>Github</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Adobe Photoshop</li>
        </ul>
        <div className="footer-actions mt-14 flex flex-col items-center gap-2">
          <button type='button' href="#" className='bg-green-600 px-2 py-3 rounded animate__animated animate__pulse animate__infinite animate__fast' onClick={downloadPdf}>Get My Resume</button>
          <div className='flex flex-col items-center mt-4'>
            <p>Kwasi Baayeh ( <span className='font-bold  text-orange-500'>Steps</span> 👣 )</p>
            <p>&copy; 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
