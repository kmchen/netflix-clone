import React from 'react'

function Footer() {
  return (
  //<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
  //  <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
  //      <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
  //          Built by{" "}
  //          <a href='http://github.com/kmchen' target='_blank' className='font-medium underline underline-offset-4'>you</a>
  //          . The source code is available on{" "}
  //          <a href='http://github.com/kmchen' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>Github</a>
  //          .
  //      </p>
  //  </div>
  //</footer>
    <footer className='border border-gray-700 text-muted-foreground p-5 bg-black text-white text-balance text-sm text-center md:text-left leading-loose'>
        <span>
            Built by <a href="https://github.com/kmchen" className='underline underline-offset-4'>me</a>
        </span>
        .{" "}
        <span>
            The source code is available <a href="https://github.com/kmchen" className='underline underline-offset-4'>here</a>
        </span>
    </footer>
  )
}

export default Footer