import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div>
      <div className='bg-ethLime-400 flex  justify-between items-center w-full border-b-4 border-ethGray-50'>
<div className=' m-4  ml-0  p-2 rounded-3xl bg-black'>
<Link href="/">
            <Image src='/image/cross.jpg' alt='5G' width={50} height={22} className=' bg-black' />
            </Link>
</div>

<div className='flex gap-4 mx-4'>
<Link href="/">Home/መነሻ</Link>
</div>

      </div>
    </div>
  )
}

export default Header