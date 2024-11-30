import Logo from "../../assets/stylenest.svg"
import Shopping from "../../assets/shopping.svg"
import { useState } from "react"

type Props = {
  lists?: string[]
}

const defaultList = ["Shop All", "Latest Arrivals"]

export default function Navbar({lists = defaultList}: Props) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full py-5 px-4 lg:mx-auto lg:gap-[103px] lg:px-28 ">
      <img src={Logo} alt="LOGO" />

      <ul className="hidden lg:flex justify-start gap-7  w-[881px]">
        {lists.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex gap-4">
      <img src={Shopping} alt="" className="w-[24px]"/>
        <button onClick={() => setShowMenu(true)}>=</button>
      </div>

      {showMenu && (
        <div className="fixed top-0 left-0 border bg-white w-full h-full max-w-[400px] p-6 animate-nav-menu-in">
          <div className="flex justify-between">
            <img src={Logo} alt="LOGO" />
            <button className="top-0 right-0" onClick={() => setShowMenu(false)}>X</button>
          </div>
          <ul className="py-8">
            {lists.map((item, idx) => (
              <li key={idx} className="py-2">{item}</li>
            ))}
        </ul>
        </div>
      )}
    </nav>
  )
}