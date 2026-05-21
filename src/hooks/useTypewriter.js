import { useEffect, useState } from 'react'

export function useTypewriter(phrases, { typeMs = 75, deleteMs = 45, pauseMs = 1800 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!phrases.length) return undefined

    const phrase = phrases[index]
    let timeout

    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((current) => (current + 1) % phrases.length)
      }, 280)
    } else if (deleting) {
      timeout = setTimeout(() => setText(phrase.slice(0, text.length - 1)), deleteMs)
    } else {
      timeout = setTimeout(() => setText(phrase.slice(0, text.length + 1)), typeMs)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeMs, deleteMs, pauseMs])

  return text
}
