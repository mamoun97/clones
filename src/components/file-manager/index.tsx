
import React from 'react'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    RadioGroup,
    Radio,
    Select,
    SelectItem,
    Input,
} from "@nextui-org/react";
import { AiOutlineLink } from 'react-icons/ai';
import { IoClose, IoCloudUploadSharp, IoSearchSharp } from 'react-icons/io5';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function FileManager() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const NoMedia = <div className='w-full px-4 h-full flex items-center justify-center flex-col gap-2'>
        <div className='w-16 h-16 text-center rounded-full bg-primary/15 text-primary flex justify-center items-center'>
            <IoIosInformationCircleOutline className='w-8 h-8' />

        </div>
        <h1 className='font-semibold text-center'>
            No Media Selected
        </h1>
        <p className='text-xs font-normal text-center text-foreground-400'>
            Select a media item to view and edit details
        </p>
    </div>
    return (
        <div className="flex flex-col gap-2">
            <Button onPress={onOpen}>Open Modal</Button>
            <RadioGroup
                label="Select scroll behavior"
                orientation="horizontal"
                value={scrollBehavior}
                onValueChange={setScrollBehavior}
            >
                <Radio value="inside">inside</Radio>
                <Radio value="outside">outside</Radio>
            </RadioGroup>
            <Modal isOpen={isOpen} hideCloseButton size='4xl' scrollBehavior={"outside"} onOpenChange={onOpenChange}>
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex  gap-2">
                                <h1>Media Library</h1>
                                <div className="grow"></div>
                                <Button startContent={<AiOutlineLink className='w-4 h-4' />} color="default" variant="solid" size='sm'>
                                    URL
                                </Button>
                                <Button startContent={<IoCloudUploadSharp className='w-4 h-4' />} color="default" variant="solid" size='sm'>
                                    Upload
                                </Button>
                                <Button onPress={onClose} isIconOnly radius='full' color="default" variant="solid" size='sm'>
                                    <IoClose className='w-4 h-4' />
                                </Button>
                            </ModalHeader>
                            <ModalBody className='p-0'>
                                <div className='min-h-[280px] border-t border-content3 border-b grid grid-cols-4'>
                                    <div className='col-span-3 border-e border-content3'>
                                        <div className='p-4 border-b border-content3 grid grid-cols-5 gap-2'>
                                            <Input
                                                size='sm'
                                                fullWidth
                                                label=""
                                                className='col-span-3'
                                                placeholder="Search"
                                                type="text"
                                                startContent={<IoSearchSharp className='w-4 h-4' />}
                                            />
                                            <Select
                                                size='sm'
                                                className="min-w-[60px]"
                                                label=""
                                                defaultSelectedKeys={["All Types"]}
                                                labelPlacement={"outside"}
                                            >
                                                {["All Types", "images", "videos", "GIFs"].map((item) => (
                                                    <SelectItem key={item}>{item}</SelectItem>
                                                ))}
                                            </Select>
                                            <Select
                                                size='sm'
                                                className="min-w-[60px]"
                                                label=""
                                                defaultSelectedKeys={["Recent"]}
                                                labelPlacement={"outside"}
                                            >
                                                {["Recent", "Title", "size"].map((item) => (
                                                    <SelectItem key={item}>{item}</SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='bg-content2'>
                                        {NoMedia}
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <span className='text-xs text-foreground-500'>3 items</span>
                                <div className="grow"></div>
                                <Button size='sm' color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button size='sm' color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

