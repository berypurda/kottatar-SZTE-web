import React from "react"
import "./Uploaded.css"
import { useCollection } from "../../hooks/useCollection"
import ScoreList from "../../components/ScoreList"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Uploaded() {
  const { documents, error } = useCollection("scores")
  const { user } = useAuthContext()
  const scores = documents
    ? documents.filter((document) => {
        return true
      })
    : null

  return (
    <div>
      <h2 className="page-title-uploaded">Elérhető kották</h2>
      {error && <p className="error">{error}</p>}
      {scores && <ScoreList scores={scores} />}
    </div>
  )
}

