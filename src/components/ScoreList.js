import React from "react"
import "./ScoreList.css"
{
  /*import { Link } from "react-router-dom"*/
}

export default function ScoreList({ scores }) {
  return (
    <div className="score-list">
      {scores.length === 0 && <p>No scores yet</p>}
      {scores.map((score) => (
        <a href={score.url}>
          <h4>{score.title}</h4>
          <p>Composer: {score.composer}</p>
        </a>
      ))}
    </div>
  )
}

