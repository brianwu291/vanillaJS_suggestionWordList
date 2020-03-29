import useState from './useState.js'

function fetchSearchedWordList() {
  const [getSearchedWordList, setSearchedWordList] = useState([])
  new Promise((resolve) => {
    const data = [
      '牛肉麵',
      '牛肉湯麵',
      '蝦味義大利麵',
      '蒜味義大利麵',
      '番茄湯麵',
      '番茄肉湯麵',
      '麻醬麵',
      '麻醬蝦麵',
    ]
    resolve(data)
  }).then(res => {
    setSearchedWordList(res)
  })
  return getSearchedWordList
}

export default fetchSearchedWordList
