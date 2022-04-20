import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import ScoreList from '../../components/ScoreList'


export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('scores')
  const [query, setQuery] = useState('')
 
 
  
  
  return (
    <div>
      <h2 className="page-title">Kották:</h2>
      {error && <p className="error">{error}</p>}
      {projects && <ScoreList scores={scores} />}
    </div>
  )
}
