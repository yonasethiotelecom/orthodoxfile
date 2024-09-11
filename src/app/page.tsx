
import Donate from '@/components/donate'
import FolderList from '@/components/folderList'


import React from 'react'



function page() {
  return (
    <div>
      <div className=' flex  flex-col md:flex-row gap-6 justify-center   items-center      m-4  grow  ' >
     
        <FolderList/>
        
        <Donate/>
      </div>
    </div>
  )
}

export default page
