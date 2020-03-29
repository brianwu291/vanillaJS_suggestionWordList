import fetchSearchedWordList from './fetchSearchedWordList.js'
import useState from './useState.js'

function useSuggestWordHooks() {
  const [getSuggestWordList, setSuggestWordList] = useState([])
  const [getTypeWord, setTypeWord] = useState('')
  const [getIsSuggestShow, setIsSuggestShow] = useState(false)
  const getSearchedWordList = fetchSearchedWordList()
  function updateSuggestWordList() {
    const typeWord = getTypeWord()
    if (typeWord !== '') {
      const newSuggestWordList = getSearchedWordList().filter((word) => word.includes(typeWord))
      setSuggestWordList(newSuggestWordList)
      setIsSuggestShow(true)
    } else {
      setSuggestWordList([])
      setIsSuggestShow(false)
    }
  }
  function handleUserInputChange(event) {
    const userInputWord = event.target.value
    setTypeWord(userInputWord)
  }
  function handleSuggestWordClick(event) {
    const userChosenWord = event.target.textContent
    setTypeWord(userChosenWord)
    setIsSuggestShow(false)
  }
  return ({
    getSearchedWordList,
    getSuggestWordList,
    updateSuggestWordList,
    handleUserInputChange,
    handleSuggestWordClick,
    getTypeWord,
    getIsSuggestShow,
  })
}

export default useSuggestWordHooks
