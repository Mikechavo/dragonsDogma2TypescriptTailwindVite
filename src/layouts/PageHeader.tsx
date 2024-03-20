import {Menu, Upload, Bell, User, Mic, Search, BadgeHelp, Swords} from "lucide-react"
import logo from "../assets/dd2.jpg"
import  Button  from "../components/Button"

const PageHeader = () => {
 return (
  <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
   <div className="flex gap-4 items-center flex-shrink-0">
    <Button variant="ghost" size="icon">
     <Menu />
    </Button>
      {/* react router link component */}
    <a href="/">
     <img src={logo} className="h-12" />
    </a>
    </div>
   <div></div>
   <form className="flex gap-4 flex-grow justify-center">
    <div className="flex flex-grow max-w-[600px]">
     <input type="search" 
     placeholder="Search" 
     className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-red-500 outline-none" />
     <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0">
      <Search />
     </Button>
    </div>
   </form>
   <div className="flex flex-shrink-0 md:gap-2">
     <Button size="icon" variant="ghost" className="md:hidden">
       <Search />
     </Button>
     <Button size="icon" variant="ghost">
       <BadgeHelp />
     </Button>
     <Button size="icon" variant="ghost">
       <Swords />
     </Button>
     <Button size="icon" variant="ghost">
       <User />
     </Button>
   </div>
  </div>
 )
}

export default PageHeader