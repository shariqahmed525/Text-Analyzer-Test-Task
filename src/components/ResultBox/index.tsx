import './index.scss'
import { pronouns } from '../../data/pronouns'
import { useEffect, useState } from 'react'

const ResultBox = ({ text }: { text: string }) => {
  const [numOfCharacters, setNumOfCharacters] = useState(0)
  const [numOfWords, setNumOfWords] = useState(0)

  useEffect(() => {
    _calculateCharacters()
    _calculateWords()
  }, [text])

  const _calculateWords = () => {
    if (!text) return 0
    const words = text
      // ?.replace?.(/[,.\s]/g, ',')
      ?.split?.(/[,.\s]/g)
      ?.filter?.((o: string) => !!o)
    setNumOfWords(words?.length || 0)
  }

  const _calculateCharacters = () => {
    if (!text) return 0
    const words = text?.length
    setNumOfCharacters(words || 0)
  }

  const _calculateSentances = (): number => {
    if (!text) return 0
    const words = text?.split?.(/[.!?]/)
    return words?.length - 1 || 0
  }

  const _calculateParagraphs = (): number => {
    if (!text) return 0
    const words = text?.split?.('\n')?.filter?.((o: string) => !!o)
    return words?.length || 0
  }

  const _calculatePronouns = () => {
    if (!text) return 0
    let num_of_pronouns = 0
    text?.split?.(' ')?.forEach?.((o) => {
      if (pronouns?.includes(o)) {
        num_of_pronouns = num_of_pronouns + 1
      }
    })
    return num_of_pronouns || 0
  }

  const resultBar = [
    {
      title: 'Words',
      value: numOfWords,
    },
    {
      title: 'Characters',
      value: numOfCharacters,
    },
    {
      title: 'Sentences',
      value: _calculateSentances(),
    },
    {
      title: 'Paragraphs ',
      value: _calculateParagraphs(),
    },
    {
      title: 'Pronouns',
      value: _calculatePronouns(),
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
