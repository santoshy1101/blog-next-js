import React from 'react'
import Link from "next/link";

const Blog = () => {
  return (
    <div className="mt-8 text-center m">
    <Link href={'/blogpost/learn-next-js BlogPost 1'}>
    <h3 className="font-bold">BlogPost 1 Create By User 1</h3></Link>
    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit?</p>
  
    <Link href={'/blogpost/learn-next-js BlogPost 2'}>
    <h3 className="font-bold">BlogPost 2 Create By User 2</h3></Link>
    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit?</p>
    
      <Link href={'/blogpost/learn-next-js BlogPost 3'}>
    <h3 className="font-bold">BlogPost 3 Create By User 3</h3></Link>
    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit?</p>
    
    <Link href={'/blogpost/learn-next-js BlogPost 4'}>
    <h3 className="font-bold">BlogPost 3 Create By User 4</h3></Link>
    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit?</p>
    </div>
  )
}

export default Blog