
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { IoMdPerson } from 'react-icons/io'
import { IoLockClosed } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export default function AuthAnimation() {
    const [isLogin, setIslogin] = useState(true)
    return (
        <div className='h-screen overflow-hidden relative grid grid-cols-2 w-full'>
            <div className="absolute top-0 left-[5%] w-36 h-20 blur-3xl bg-blue-400/30 rounded-full"></div>
            <div className="absolute top-0 right-0 w-36 h-40 blur-3xl bg-violet-500/30 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 w-36 h-40 blur-3xl bg-fuchsia-600/30 scale-150 rounded-full"></div>
            <div className={`flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-64 ${isLogin ? "" : "translate-x-1/2 opacity-0"}`} style={{
                    transition: "transform 1s, opacity 1.1s"
                }}>
                    <Login />
                </div>
            </div>
            <div className={`flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-64 ${!isLogin ? "" : "-translate-x-1/2 opacity-0"}`} style={{
                    transition: "transform 1s, opacity 1.1s"
                }}>
                    <Register />
                </div>
            </div>



            <div className={`absolute grid grid-cols-2  inset-0 -bottom-5 bg-gradient-to-r from-fuchsia-600 to-purple-600
                ${isLogin ? "translate-x-1/2" : " -translate-x-1/2"}`} style={{
                    transition: "transform 1s, border-radius 1.1s"
                }}>
                <div className='flex items-center justify-center'>
                    <div className={`text-content2 flex flex-col items-center transition-all duration-1000 gap-3 ${isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                        <h1 className='text-center text-xl font-bold'>
                            New Here?
                        </h1>
                        <p>
                            To create a new account, click on the button.
                        </p>
                        <Button variant='bordered' className='text-white' onClick={() => setIslogin(false)}>
                            Register
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className={`text-content2  flex flex-col items-center transition-all duration-1000 gap-3 ${isLogin ? "translate-x-full opacity-0" : " translate-x-0 opacity-100"}`}>
                        <h1 className='text-center text-xl font-bold'>
                            You are registered?
                        </h1>
                        <p>
                            Click here to log in.
                        </p>
                        <Button variant='bordered' className='text-white' onClick={() => setIslogin(true)}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Login() {
    return <div className='flex flex-col gap-3 w-full max-w-64 '>
        <h1 className='font-bold text-xl text-center mb-2 tracking-wider'>Sign in</h1>
        <Input
            type="text"
            label=""
            placeholder="usename"
            labelPlacement="outside"
            startContent={
                <IoMdPerson className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
        <Input
            type="password"
            label=""
            placeholder="password"
            labelPlacement="outside"
            startContent={
                <IoLockClosed className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
        <Button color='secondary' variant='flat' className='w-full mx-auto font-semibold'>
            Login
        </Button>
        <Social txt='Sign un' />

    </div>
}


function Register() {
    return <div className='flex flex-col gap-3 w-full max-w-64  '>
        <h1 className='font-bold text-xl text-center mb-2 tracking-wider'>Sign up</h1>
        <Input
            type="text"
            label=""
            placeholder="username"
            labelPlacement="outside"
            startContent={
                <IoMdPerson className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
        <Input
            type="email"
            label=""
            placeholder="email"
            labelPlacement="outside"
            startContent={
                <MdEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
        <Input
            type="password"
            label=""
            placeholder="password"
            labelPlacement="outside"
            startContent={
                <IoLockClosed className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        />
        <Button color='secondary' variant='flat' className='w-full mx-auto font-semibold'>
            Register
        </Button>
        <Social txt='Sign in' />
    </div>
}

function Social({ txt }: { txt: string }) {
    return <div className='flex flex-col gap-3 mt-2'>
        <p className='text-center text-foreground-600 text-sm font-normal'>
            Or {txt} with social platforms
        </p>
        <div className="flex gap-2 justify-center items-center">
            <Button variant='flat' radius='full' isIconOnly>
                <FaFacebook className='text-secondary'/>
            </Button>
            <Button variant='flat' radius='full' isIconOnly>
                <FaTwitter className='text-secondary'/>
            </Button>
            <Button variant='flat' radius='full' isIconOnly>
                <FaGoogle className='text-secondary'/>
            </Button>
            <Button variant='flat' radius='full' isIconOnly>
                <FaLinkedin className='text-secondary'/>
            </Button>
        </div>
    </div>
}