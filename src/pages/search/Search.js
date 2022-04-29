import React from "react"
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import ScoreList from '../../components/ScoreList'
import './Search.css'
import { useMode } from "./../../hooks/useMode"

export default function Search() {
  const [term, setTerm] = useState('')
  const { documents, error } = useCollection('scores')
  const { mode } = useMode()

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  const scores = documents
  ? documents.filter((document) => {
      if(document.composer.toLowerCase().includes(term.toLowerCase()) || document.title.toLowerCase().includes(term.toLowerCase())){
        return true
      }
    })
  : null

  
  
  return (
  <div className={`search-form ${mode}`}>
    <div className="searchbar">
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <h2>Keresés:</h2>
      <input 
        id="search" 
        type="text" 
        onChange={(e) => setTerm(e.target.value)} 
        required 
      />
      
    </form>
  </div>
    <div>
      {term && <h2 className="page-title-search">Ezt találtuk:</h2>}
      {error && <p className="error">{error}</p>}
      {term && <ScoreList scores={scores} />}
    </div>
  </div>
    
  )
}
