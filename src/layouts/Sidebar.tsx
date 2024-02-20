import { Clapperboard, Home, Library, Repeat } from 'lucide-react'
import React, { ElementType } from 'react'
import { buttonStyles } from '../components/Button';
import { twMerge } from 'tailwind-merge';

export default function Sidebar() {
  return (
    <>
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItems Icon={Home} title="Home" url="/" />
        <SmallSidebarItems Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItems Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <SmallSidebarItems Icon={Library} title="Library" url="/library" />
    </aside>
    <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
<LargeSidebarSection>
    <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
</LargeSidebarSection>
    

    </aside>
    </>
  )
}

 type SmallSidebarItemProps = {
    Icon:  ElementType;
    title: string;
    url: string;
 }
function SmallSidebarItems({ Icon, title, url } : SmallSidebarItemProps) {
    return (<a href={url} className={twMerge(buttonStyles({variant:"ghost"}),"py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
        <Icon className="w-6 h-6" />
        <div className="text-sm">{title}</div>
    </a>)
} 

function LargeSidebarSection({ children } : { children : ElementType }) {}

function LargeSidebarItem ({ isActive, Icon, title, url } : LargeSidebarItemProps) {}