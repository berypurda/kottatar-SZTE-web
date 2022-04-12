import React from "react"
import { useState, useEffect } from "react"
import { useFirestore } from "../../hooks/useFirestore"
import { projectStorage } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Upload() {
  const [composer, setComposer] = useState("")
  const [title, setTitle] = useState("")
  const [score, setScore] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [scoreError, setScoreError] = useState(null)
  const { addDocument, response } = useFirestore("scores")
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    setError(null)
    setIsPending(true)
    e.preventDefault()
    try {
      const id = title + " (" + composer + ")"
      const uploadPath = `scores/${user.uid}/${id}`
      const scr = await projectStorage.ref(uploadPath).put(score)
      const scrUrl = await scr.ref.getDownloadURL()
      addDocument({
        uid: user.uid,
        composer,
        title,
        id,
        url: scrUrl,
      })
      setIsPending(false)
      setError(null)
    } catch (error) {
      setError(error.message)
      setIsPending(false)
    }
  }
  const handleFileChange = (e) => {
    setScore(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setScoreError("Please select a file")
      return
    }

    setScoreError(null)
    setScore(selected)
    console.log("score updated")
  }

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setComposer("")
      setTitle("")
    }
  }, [response.success])

  return (
    <>
      <h3>Add a Score</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Composer:</span>
          <input
            type="text"
            required
            onChange={(e) => setComposer(e.target.value)}
            value={composer}
          />
        </label>
        <label>
          <span>Title:</span>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Score pdf:</span>
          <input
            required
            type="file"
            onChange={handleFileChange}
            className="btn"
          />
          {scoreError && <div className="error">{scoreError}</div>}
        </label>
        {isPending && (
          <button className="btn" disabled>
            Uploading...
          </button>
        )}
        {!isPending && <button className="btn">Add Score</button>}
        {error && <div className="error">{error}</div>}
      </form>
    </>
  )
}

