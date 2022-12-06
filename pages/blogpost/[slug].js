import React from 'react';
import { useRouter } from 'next/router';


const slug = () => {
    const router = useRouter();
    const {slug} =router.query;

  return (
    <div className='px-24'>
    <h1 className='font-bold'>Title of the page {slug}</h1>
    <hr />
    <div >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, praesentium nemo quaerat architecto aperiam voluptas quas sit molestias natus rem eligendi aliquam, est ullam laudantium, itaque amet non beatae in. Voluptatem, quod quas ea unde dolores nostrum. Odio, architecto excepturi?
    </div>
    </div>
  )
}

export default slug