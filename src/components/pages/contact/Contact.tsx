import * as React from "react"

const Contact = () => {
  return (
    <div className="">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" required />
        <button type="submit" color="primary">
          送信
        </button>
      </form>
    </div>
  )
}

export default Contact
