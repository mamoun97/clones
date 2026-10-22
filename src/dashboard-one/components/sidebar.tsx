import { Avatar, Button, Chip, Listbox, ListboxItem } from '@nextui-org/react'
import images from '../../assets'
import { RiHome6Fill } from 'react-icons/ri'
import { TbLogout2, TbMessage2Plus } from 'react-icons/tb'
import { MdOutlinePayment } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { users } from '../../data/users'



const items = [
  {
    id: 1,
    name: "Home",
    icon: RiHome6Fill,
    active: true,
    endContent: <Chip color='primary' size='sm' className='h-5 rounded-md' >12</Chip>
  },
  {
    id: 2,
    name: "Search",
    icon: FiSearch,
    active: false
  },
  {
    id: 3,
    name: "Messages",
    icon: TbMessage2Plus,
    active: false
  },
  {
    id: 4,
    name: "Payment",
    icon: MdOutlinePayment,
    active: false
  },
]
export default function Sidebar({ open, className="" }: { open: boolean, className?:string }) {
  return (
    <div className={`min-h-full  h-full w-64 flex transition-all flex-col bg-content1 overflow-auto no-scrollbar pe-0 ${open ? "" : "!w-16"} ${className}`}>
      <div className="flex items-center gap-2 p-4">
        <img src={images.logo} className='h-7' alt="" />
        <span className={'text-lg font-bold tracking-widest  transition-width overflow-hidden ' + (open ? "max-w-full" : "max-w-0")}>MamounDev</span>
      </div>
      <div className='p-4 px-2 flex flex-col grow h-full'>
        <Listbox>
          {
            items.map((el, k) => {
              return <ListboxItem
                key={el.name + "-" + k}
                color='default'
                className={`transition-[padding_.25s] overflow-hidden ${open ? "py-3 px-4" : "p-2"} ${el.active ? "bg-content3 text-foreground-700" : "text-foreground-600"}`}
                startContent={
                  <el.icon className={'w-5 h-5 min-w-5 ' + (el.active ? "" : "opacity-80")} />
                }
                endContent={
                  <div className={open ? "" : "hidden"}>
                    {el.endContent}
                  </div>
                }
              >
                <span className={'font-semibold ' + (open ? "" : "hidden")}>{el.name}</span>
              </ListboxItem>
            })
          }
        </Listbox>
        <div className="grow  my-3">
          <h1 className={'text-sm transition-[height_.25s_opacity_125]  ps-2 font-semibold mb-2 whitespace-nowrap overflow-hidden w-full '+(open?"max-h-full":"max-h-0 opacity-0")}>
            Subscriptions
          </h1>
          <Listbox className=''>
            {
              users.map((el, k) => {
                return <ListboxItem
                  key={el.name + "-" + k}
                  color='default'
                  className={`transition-all overflow-hidden  ${open ? "py-1 px-2" : "p-1"} `}
                  startContent={
                    <Avatar src={el.image} radius='sm' className='w-7 min-w-7 h-7 text-tiny'/>
                  }
                >
                  <span className={' text-xs font-semibold text-foreground-600 whitespace-nowrap ' + (open ? "" : "hidden")}>{el.name}</span>
                </ListboxItem>
              })
            }
          </Listbox>
        </div>
        <div className='flex flex-col gap-2 '>
          <Button isIconOnly={!open} startContent={<IoSettingsOutline className={'w-5 h-5 min-w-5'} />} className={`${(open ? "justify-start" : "p-2")} w-full`} fullWidth color="default" variant='flat'>
            <span className={'font-semibold ' + (open ? "" : "hidden")}>
              Setting
            </span>
          </Button>
          <Button isIconOnly={!open} startContent={<TbLogout2 className={'w-5 h-5 min-w-5'} />} className={`${(open ? "justify-start" : "p-2")} w-full`} fullWidth color="danger" variant='flat'>
            <span className={'font-semibold ' + (open ? "" : "hidden")}>
              Logout
            </span>
          </Button>

        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
