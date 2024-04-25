import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>post {params.slug}</div>
  )
}
