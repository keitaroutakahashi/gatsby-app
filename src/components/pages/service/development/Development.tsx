import * as React from "react"
import DevelopmentIcon from "./icon/DevelopmentIcon"
import MaintenanceIcon from "./icon/MaintenanceIcon"
import DesignIcon from "./icon/DesignIcon"
import MarketingIcon from "./icon/MarketingIcon"

const Development = () => {
  return (
    <div className="">
      <ul className="">
        <li className="flex sp:flex-col sp:items-center sp:text-center">
          <DevelopmentIcon />
          <div className="pc:ml-10 sp:mt-6">
            <p className="pc:text-2xl sp:text-lg font-bold">開発</p>
            <p className="pc:mt-4 sp:mt-2">テキストテキストテキスト</p>
          </div>
        </li>
        <li className="flex pc:flex-row-reverse sp:flex-col sp:items-center sp:mt-24 sp:text-center">
          <MaintenanceIcon />
          <div className="pc:mr-10 sp:mt-6">
            <p className="pc:text-2xl sp:text-lg font-bold">保守・運用</p>
            <p className="pc:mt-4 sp:mt-2">テキストテキストテキスト</p>
          </div>
        </li>
        <li className="flex sp:flex-col sp:items-center sp:mt-24 sp:text-center">
          <DesignIcon />
          <div className="pc:ml-10 sp:mt-6">
            <p className="pc:text-2xl sp:text-lg font-bold">デザイン</p>
            <p className="pc:mt-4 sp:mt-2">テキストテキストテキスト</p>
          </div>
        </li>
        <li className="flex pc:flex-row-reverse sp:flex-col sp:items-center sp:mt-24 sp:text-center">
          <MarketingIcon />
          <div className="pc:mr-10 sp:mt-6">
            <p className="pc:text-2xl sp:text-lg font-bold">マーケティング</p>
            <p className="pc:mt-4 sp:mt-2">テキストテキストテキスト</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Development
