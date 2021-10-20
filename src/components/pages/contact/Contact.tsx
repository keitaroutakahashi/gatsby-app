import * as React from "react"

const Contact = () => {
  return (
    <div className="">
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" required className="border" />
        <button type="submit" color="primary">
          送信
        </button>
      </form>
    </div>
  )
}

export default Contact
