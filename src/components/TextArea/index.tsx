import './index.scss'

const TextArea = ({ value, setValue }: { value: string; setValue: (txt: string) => void }) => {
  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={value}
      onChange={({ target }) => setValue(target?.value)}
    />
  )
}

export default TextArea
