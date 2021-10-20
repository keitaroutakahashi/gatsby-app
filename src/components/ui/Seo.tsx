import * as React from "react"
import { Helmet } from "react-helmet"

type Props = {
  title: string
  description: string
}

const Seo = ({ title, description }: Props) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title="test company"
      titleTemplate={title ? `${title} | %s ` : null}
      link={[
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

export default Seo
