interface JsonLdProps {
  jsonLdSchema: {
    name: string
    description: string
    type: string
    image?: string
    author?: {
      name: string
    }
  }
}

export const JsonLd = (props: JsonLdProps) => {
  const origin = process.env.NEXTAUTH_URL || 'http://localhost:3000'

  const schema = {
    '@context': 'https://schema.org',
    '@type': props.jsonLdSchema.type,
    name: props.jsonLdSchema.name,
    description: props.jsonLdSchema.description,
    image: props.jsonLdSchema.image || `${origin}/images/OG.jpg`,
    author: {
      '@type': 'Person',
      name: props.jsonLdSchema.author?.name || 'Petah-Tikva',
    },
  }

  return (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}