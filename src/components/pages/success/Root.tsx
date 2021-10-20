import * as React from "react"
import { SubTitle } from "../../ui/Title"

const Root = () => {
  return (
    <>
      <section className="pc:max-w-5xl pc:mx-auto pc:mt-40 sp:mt-24 sp:px-4 text-black">
        <SubTitle title="Thank you for contacting us!" />
        <div className="pc:mt-16 sp:mt-12 text-center">
          <p className="sp:text-sm">お問い合わせありがとうございます。</p>
          <p className="mt-4 sp:text-sm">
            ご入力頂いたメールアドレスにご連絡致しますので、今しばらくお待ち下さい。
          </p>
        </div>
      </section>
    </>
  )
}

export default Root
