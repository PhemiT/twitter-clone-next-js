import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'

function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>

        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <Image src='https://rb.gy/ogau5a' width={30} height={30}/> 
        </div>

        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
          <SidebarLink text='Home' Icon={HomeIcon} active />
          <SidebarLink text='Explore' Icon={HashtagIcon} />
          <SidebarLink text='Notifications' Icon={BellIcon} />
          <SidebarLink text='Messages' Icon={InboxIcon} />
          <SidebarLink text='Bookmarks' Icon={BookmarkIcon} />
          <SidebarLink text='Lists' Icon={ClipboardListIcon} />
          <SidebarLink text='Profile' Icon={UserIcon} />
          <SidebarLink text='More' Icon={DotsCircleHorizontalIcon} />
        </div>
    </div>
  )
}

export default Sidebar