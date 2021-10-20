import * as React from "react"
import FrontEndIcon from "./icon/FrontEndIcon"
import BackEndIcon from "./icon/BackEndIcon"
import DesignIcon from "./icon/DesignIcon"
import MarketingIcon from "./icon/MarketingIcon"

const Education = () => {
  return (
    <ul className="grid grid-cols-2 pc:gap-y-24 sp:gap-x-8 sp:gap-y-16">
      <li className="text-center text-black">
        <h3 className="pc:text-2xl sp:text-lg font-bold">フロントエンド</h3>
        <div className="mt-5">
          <FrontEndIcon />
        </div>
        <p className="pc:mt-6 sp:mt-4 sp:text-sm">
          フロントエンド開発を行います
        </p>
      </li>
      <li className="text-center text-black">
        <h3 className="pc:text-2xl sp:text-lg font-bold">バックエンド</h3>
        <div className="mt-5">
          <BackEndIcon />
        </div>
        <p className="pc:mt-6 sp:mt-4 sp:text-sm">バックエンド開発を行います</p>
      </li>
      <li className="text-center text-black">
        <h3 className="pc:text-2xl sp:text-lg font-bold">デザイン</h3>
        <div className="mt-5">
          <DesignIcon />
        </div>
        <p className="pc:mt-6 sp:mt-4 sp:text-sm">デザイン開発を行います</p>
      </li>
      <li className="text-center text-black">
        <h3 className="pc:text-2xl sp:text-lg font-bold">マーケティング</h3>
        <div className="mt-5">
          <MarketingIcon />
        </div>
        <p className="pc:mt-6 sp:mt-4 sp:text-sm">
          マーケティング開発を行います
        </p>
      </li>
    </ul>
  )
}

export default Education
