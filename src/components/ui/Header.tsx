import * as React from "react"
import { Link } from "gatsby"

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className="fixed z-10 flex justify-between items-center w-full h-16 py-2 pc:px-8 sp:px-2">
      <h1>
        <Link to="/" className="pc:text-2xl text-black font-bold">
          Test Company
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center sp:text-sm text-black">
          <li className="ml-5">
            <Link to="/company" className="font-bold">
              Company
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/service" className="font-bold">
              Service
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
