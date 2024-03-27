import Button from "./Button"


const CategoryPills = () => {
 return(
  <div className="overflow-x-hidden relative">
   <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
    <Button className="py-1 px-3 rounded-lg whitespace-nowarp ">All</Button>
    <Button className="py-1 px-3 rounded-lg whitespace-nowarp ">JS</Button>
   </div>
  </div>
 )
}

export default CategoryPills