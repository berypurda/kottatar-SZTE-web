import React from "react"
import "./Uploaded.css"
import { useCollection } from "../../hooks/useCollection"
import ScoreList from "../../components/ScoreList"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useMode } from "./../../hooks/useMode"

export default function Uploaded() {
  const { documents, error } = useCollection("scores")
  const { user } = useAuthContext()
  const { mode } = useMode()
  const scores = documents
    ? documents.filter((document) => {
        return true
      })
    : null

  return (
    <div className={`uploaded ${mode}`}>
      <h2 className="page-title-uploaded">Elérhető kották</h2>
      {error && <p className="error">{error}</p>}
      {scores && <ScoreList scores={scores} />}
    </div>
  )
}

