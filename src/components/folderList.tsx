import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function FolderList() {
  const List = [
    { text: 'General', link: 'general' },
    { text: 'ገድላት እና ድርሳናት', link: 'gedlat' },
    { text: 'መጽሐፍ ቅድስ', link: 'mesafkdus' },
    { text: 'ሐይማኖት', link: 'haymanot' },
    { text: 'ጥናታዊ ጽሑፍ', link: 'tnatawishuf' },
    { text: 'ስነ ምግባር', link: 'snemgbar' },
    { text: 'ዓለማዊ መጽሐፍት', link: 'alemawi' },
    { text: 'ስርዓት', link: 'srat' },
    { text: 'ትርጓሜ', link: 'trugamea' },
    { text: 'የግዕዝ እና የዜማ ሞገስ', link: 'yegezanazema' },
    { text: 'ታሪክ', link: 'tarick' },
    { text: 'ሚስጢራት', link: 'mistrat' },
    {text:'English religious book', link: 'english' }
];

// Example usage:


  return (
    <div>
    <h2 className=' text-center font-extrabold  text-4xl mb-6 grow'> Categories/ማውጫ:</h2>
    <ul className=' grid  grid-cols-2 gap-4 md:grid-cols-4 md:gap-12  grow'>
      {List.map((item, index) => (
        <li key={index}>
          <Link href={`/${item.link}`}>
            <Image
      src="/image/folder.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
          {item.text}
          </Link>
          </li>
      ))}
    </ul>
  </div>
  )
}

export default FolderList
