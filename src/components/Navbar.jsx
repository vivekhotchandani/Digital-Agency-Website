import Link from "next/link"
import Logo from "./Logo"
import { Button } from "./ui/button"


const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mr-10 items-center h-22 bg-white text-textcolor ">
        <div className="flex flex-row space-x-5 justify-center items-center" >
        <Logo/>
              <h1 className=" text-2xl md:text-[48px] text-textcolor font-semibold">We as HelpDel</h1>
        </div>
        <div>
            <ul className="flex flex-row justify-center items-center space-x-12">
                  <Link href={"/"} className="text-lg">Our Company</Link>
                  <Link href={"/project"} className="text-lg">Our Projects</Link>
                <Link href={"/about"} className="text-lg">About</Link>
                <Link href={"/contactus"} className="text-lg"> 
                <Button className="bg-textcolor text-white text-lg py-6 px-4">Contact Us</Button>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar