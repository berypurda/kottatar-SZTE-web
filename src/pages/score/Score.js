import React from "react"
import Pdf from "../../components/Pdf"
import { useDocument } from "../../hooks/useDocument"
import { useParams } from "react-router-dom"

export default function Score() {
  const { id } = useParams()
  const { document, error } = useDocument("scores", id)
  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }
  console.log(document)
  const url = document.url

  return (
    <div>
      {/**Rendering a pdf component*/}
      {error && <p>{error}</p>}
      <h4>{document.title}</h4>
      <h2>{document.composer}</h2>
      <Pdf url={url} />
    </div>
  )
}

