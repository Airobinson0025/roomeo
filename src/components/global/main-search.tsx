import React from 'react'
import { Input } from '../ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

const MainSearch = () => {
  return (
    <div className='flex flex-col items-center my-12 px-10'>
        <div className='text-center'>
            <h2 className=''>Find listings that fit your needs.</h2>
            <h4 className='mt-4 font-light text-muted-foreground'>Your Roomeo matches will appear alongside listings results</h4>
        </div>

        <div className='flex items-center justify-between w-full max-w-[550px] mt-6'>
            <Input
                className='border-foreground text-md'
                placeholder='Search for listings in your area'
            />
            <div className='pl-2'>
                <Button size='lg' className=''>
                    <MagnifyingGlassIcon className='w-5 h-5' />
                </Button>
            </div>
        </div>
    </div>
  )
}

export default MainSearch