import React from 'react'

export default function Card({ title, text }) {
    return (
        <div className='p-5 rounded-lg bg-slate-200 shadow-lg max-w-[30vh]'>
            <p className='mb-5'>{title}</p>
            <p>{text}</p>
        </div>
    )
}
