import React, { useState } from 'react'
import Card from './components/Card';

export default function page() {
    const [show, setShow] = useState("Nanda");
    const dataCard = [
        {
            title: "Haris",
            text: "Saya adalah Haris"
        },
        {
            title: "Raihan",
            text: "Saya bisa masak"
        },
        {
            title: "Nanda",
            text: "Saya adalah orang"
        }
    ];
    return (
        <section className='p-10 text-3xl'>


            <button className={`px-5 py-2 ${show == "Haris" ? "bg-red-500" : "bg-blue-300"}  rounded-lg mt-6 text-xl text-white`}
                onClick={() => setShow("Haris")}
            >Show Haris</button>

            <button className='px-5 py-2 bg-blue-300 rounded-lg mt-6 text-xl text-white'
                onClick={() => setShow("Raihan")}
            >Show Raihan</button>

            <button className='px-5 py-2 bg-blue-300 rounded-lg mt-6 text-xl text-white'
                onClick={() => setShow("Nanda")}
            >Show Nanda</button>

            <div className='mt-14'>
                {dataCard.map((item, index) => {
                    return (
                        <div key={index}>
                            {show == item.title && <Card title={item.title} text={item.text} />}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
