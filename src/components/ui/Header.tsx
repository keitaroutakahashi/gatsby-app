import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <header className="fixed z-10 flex justify-between items-center w-full pc:h-20 sp:h-16 pc:px-8 sp:px-2">
      <h1>
        <Link to="/" className="pc:text-2xl text-black font-bold poppins">
          Test Company
        </Link>
      </h1>
      <nav>
        <ul className="sp:hidden flex items-center text-lg text-black">
          <li className="ml-5">
            <Link to="/company" className="font-bold poppins">
              Company
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/service" className="font-bold poppins">
              Service
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/contact" className="font-bold poppins">
              Contact
            </Link>
          </li>
        </ul>
        <button type="button" className="pc:hidden" onClick={handleClick}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>

        {isOpen && (
          <div className="fixed left-0 top-0 w-full px-2 pt-4 pb-12 shadow-md bg-white">
            <div className="flex justify-end pt-px">
              <button type="button" onClick={handleClick}>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              </button>
            </div>
            <ul className="mt-8 text-lg text-center text-black">
              <li className="ml-5">
                <Link to="/company" className="font-bold border-b-2 poppins">
                  Company
                </Link>
              </li>
              <li className="ml-5 mt-6">
                <Link to="/service" className="font-bold border-b-2 poppins">
                  Service
                </Link>
              </li>
              <li className="ml-5 mt-6">
                <Link to="/contact" className="font-bold border-b-2 poppins">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
