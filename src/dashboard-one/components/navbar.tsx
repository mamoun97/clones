import { Avatar, Button, Input, Kbd } from '@nextui-org/react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineBell } from 'react-icons/hi'
import { IoChevronBackOutline } from 'react-icons/io5'

export default function Navbar({ open,setOpen,className=""}:{open:boolean,setOpen:(e:boolean)=>void,className?:string}) {
  return (
    <div className={'bg-content1 h-14  w-full  shadow-content3 dark:shadow-content2 relative  grid grid-cols-4 gap-2 p-2 '+className}>

      <div className="col-span-3 flex  items-center gap-2">
        <Button onClick={()=>setOpen(!open)} color="default" variant="light" startContent={
          <div className='p-1 bg-content1 rounded-md shadow'>
            <IoChevronBackOutline className='rtl:rotate-180'/>
          </div>
        } >
          <span className='font-semibold'>Back</span>
        </Button>
        <Input
          type="search"
          label=""
          placeholder="Search..."
          labelPlacement="outside"
          className='grow'
          startContent={
            <FiSearch className='w-5 h-5'/>
          }
          endContent={
            <div className='flex items-center gap-1'>
              <Kbd keys={[]} className='dark:bg-content1'>Ctrl</Kbd>
              <span>+</span>
              <Kbd keys={[]} className='dark:bg-content1'>K</Kbd>
            </div>
          }
        />
      </div>
      <div className='flex items-center gap-2'>
        <Button color="default" isIconOnly variant='flat'>
          <HiOutlineBell className='w-5 h-5'/>
        </Button>
        <Avatar   radius="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Button color="primary"  className='grow font-semibold'>
          Become a creator
        </Button>
      </div>
    </div>
  )
}
