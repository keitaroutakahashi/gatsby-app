import * as React from "react"

const Contact = () => {
  return (
    <div className="pc:max-w-xl pc:mx-auto sp:px-4">
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="pc:flex justify-between items-center">
          <label className="flex pc:w-52 mr-8 font-bold">
            お名前
            <span className="ml-1 text-brand-secondary">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            maxLength={30}
            className="w-full border border-gray-dark rounded sp:mt-1 p-1"
          />
        </div>
        <div className="pc:flex justify-between items-center mt-8">
          <label className="flex pc:w-52 mr-8 font-bold">
            メールアドレス
            <span className="ml-1 text-brand-secondary">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            maxLength={255}
            className="w-full border border-gray-dark rounded sp:mt-1 p-1"
          />
        </div>
        <div className="pc:flex justify-between items-start mt-8">
          <label className="flex pc:w-52 mr-8 font-bold">
            お問い合わせ内容
            <span className="ml-1 text-brand-secondary">*</span>
          </label>
          <textarea
            name="content"
            rows={10}
            className="w-full border border-gray-dark rounded sp:mt-1 p-1"
          ></textarea>
        </div>
        <div className="flex justify-center pc:mt-20 sp:mt-10">
          <button
            type="submit"
            className="sp:flex-1 pc:w-52 pc:mx-auto py-3 rounded bg-brand-secondary text-white font-bold"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
