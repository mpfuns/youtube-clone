import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from '../assets/logo.png';
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
export default function PageHeader() {
   const [showFullWidth, setShowFullWidth] = useState(false);
 
  return (
    <div className=" flex gap-10  lg:gap-20 justify-between pt-2 mb-6 mx-4">
        
        <PageHeaderFirstSection  hidden={showFullWidth} />
        
        <form className={`gap-4 flex-grow justify-center ${ showFullWidth? "flex" : "hidden md:flex "}`}>
         
       
        { showFullWidth && (
          <Button onClick={()=> setShowFullWidth(false)} size="icon"  variant="ghost" type="button"  className="flex-shrink-0">
          <ArrowLeft />
        </Button>
        )}
         
          <div className="flex flex-grow  max-w-[600px]">
          <input type="search"  placeholder="Search"  className=" rounded-l-full border  border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full  focus:border-blue-500 outline-none
          " />
          <Button className="py-2 px-4 rounded-r-full  border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
          </div>
          <Button size="icon"  type="button"  className="flex-shrink-0">
            <Mic />
          </Button>
        </form>
        <div className= {`flex-shirnk- 0 md:gap-2 ${ showFullWidth? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidth(true)} size="icon" variant="ghost" className="md:hidden">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
        </div>
    </div>
  )
}

type  PageHeaderFirstSectionProps ={
  hidden?:boolean
}

  export function PageHeaderFirstSection({ hidden = false } : PageHeaderFirstSectionProps){
  const  {toggle} =useSidebarContext()
  return(
    <div className={`gap-4 items-center flex-shrink-0 ${ hidden? "hidden" : "flex"}`}>
          <Button onClick={toggle} variant='ghost' size= 'icon' >
            <Menu />
          </Button>
          <a href="/"> <img src={logo} alt=""  className="h-6"/></a>
        </div>
   )
 }