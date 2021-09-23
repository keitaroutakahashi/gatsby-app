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
      title={title}
      titleTemplate={title ? `%s | ${title}` : null}
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
