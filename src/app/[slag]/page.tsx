
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


export default function Page({ params }: { params: { slag: string } }) {

    const [files, setFiles] = useState<string[]>([]);


    useEffect(() => {
      // Fetch the list of files from the API 
      const fetchFiles = async () => {
        try {
          const response = await fetch(`/api/${params.slag}`);
          const fileList = await response.json();
          setFiles(fileList);
        } catch (error) {
          console.error('Error fetching file list:', error);
        }
      };
  
      fetchFiles();
    }, []);
  
  
    return (
        <div className='  m-8 '>
          <h2 className=' text-center  font-sans  bg-ethBlack-400 text-ethYellow-400 font-bold text-2xl border-b-2 border-ethLightBlue-500'> {params.slag} </h2>
          <ul>
            {files?.map((file) => (
              <>
              <li key={file} className=' text-start  font-sans  bg-ethBlack-400 text-ethYellow-400 font-bold text-xl  border-b-2 border-ethLightBlue-500'>
                <Link href={`/avater/${params.slag}/${file}`} target='_black'   rel="noopener noreferrer" >
                {file}{' '}
                </Link>
              </li>
             
               </>
            ))}
          </ul>
        </div>
      );
    };
  