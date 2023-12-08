import { Link, Head } from '@inertiajs/react';
import React from 'react';

export default function Homepage(props) {
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800 text-slate-50'>
            <Head title={props.title} />
            <div>
                <p>{props.description}</p>
                {props.news ? props.news.map((data, i)=>{
                    return(
                        <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-sm'> 
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.category}</i>
                            <i>{data.author}</i>
                        </div>
                    )
                }): <p>Saat ini belum ada postingan</p>}
            </div>
        </div>
    )
}