import React from 'react'
import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function Donate() {
  return (
    <div  className=' container   max-w-screen-sm'>
       <Alert className='bg-ethDeepBlue-400  grow '>
      <Terminal className="h-4 w-4" />
      <AlertTitle className='text-2xl'>Support Our Growth!</AlertTitle>
      <AlertDescription className='text-xl'>
      Help us spread the message of faith and inspire more lives. Your donation will allow us to grow, reach more people, and continue sharing our spiritual mission. Every contribution makes a difference.
      </AlertDescription>
      <AlertTitle className='text-2xl'>Donate today and be part of something divine!</AlertTitle>
    </Alert>

    </div>                          
  )
}

export default Donate
