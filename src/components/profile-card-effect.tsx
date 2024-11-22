import { Card } from '@nextui-org/react'
import React from 'react'
import images from '../assets'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const items = [
    {
        image: images.p1,
        name: "Mohamed Kadir"
    },
    {
        image: images.p2,
        name: "Omar Mustfa"
    }
]
export default function ProfileCardEffects() {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                items.map((el, k) => {
                    return <Card className='h-80 w-56 group cursor-pointer rounded-xl bg-black'>
                        <div className='bg-center transition-all group-hover:scale-[1.5] group-hover:opacity-75 duration-1000 origin-top-left grayscale w-full h-full bg-cover bg-no-repeat ' style={{
                            backgroundImage: "url('" + el.image + "')"
                        }}>

                        </div>
                        <div className='absolute group-hover:shadow-[0_0_0_20px_#0004]   inset-4 flex flex-col justify-end p-4 border-transparent  group-hover:border-white/20 transition-all duration-500 border-2 rounded-lg'>
                            <h1 className='text-4xl text-transparent group-hover:text-white  transition-all duration-700  font-semibold'>{el.name}</h1>
                            <div className="flex flex-col gap-2 text-white my-3">
                                <FaInstagram className='w-5 h-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:delay-100' />
                                <FaTwitter className='w-5 h-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:delay-200' />
                                <FaFacebookF className='w-5 h-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:delay-300' />
                            </div>
                        </div>
                    </Card>
                })
            }

        </div>
    )
}
