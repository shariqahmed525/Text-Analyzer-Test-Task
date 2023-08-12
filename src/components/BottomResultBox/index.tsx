import './index.scss'

const BottomResultBox = ({ text }: { text: string }) => {
  const _calculateAverageReadTime = (): number | string => {
    const numberOfWords = text?.split?.(' ')?.length
    const time = numberOfWords / 60
    return Math.round(time) > 1
      ? `${time?.toFixed(0)} minutes`
      : Math?.round(time) < 1
      ? `< 1 minute`
      : '1 minute'
  }

  function longer(champ: string, contender: string) {
    return contender.length > champ.length ? contender : champ
  }

  const _findLongestWord = (): number | string => {
    if (!text) return '-'
    const words = text?.split?.(/,| /)
    return words.reduce(longer)
  }

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: _calculateAverageReadTime(),
    },
    {
      title: 'Longest word:',
      value: _findLongestWord(),
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
