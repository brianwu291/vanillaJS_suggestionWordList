import createHTMLElement from './createHTMLElement.js'
import manipulateDOM from './manipulateDOM.js'
import useSuggestWordHooks from './useSuggestWordHooks.js'

const {
  getTypeWord,
  getIsSuggestShow,
  getSuggestWordList,
  updateSuggestWordList,
  handleUserInputChange,
  handleSuggestWordClick,
} = useSuggestWordHooks()

const inputEle = document.querySelector('.search_input')
const suggestWrapper = document.querySelector('.suggestion_word_list')
suggestWrapper.style.display = 'none'
const editSuggestWordListDOMMethods = manipulateDOM(suggestWrapper)

function renderSuggestWordListShowOrNot() {
  suggestWrapper.style.display = getIsSuggestShow() ? 'block' : 'none' 
}
function renderTypeWordToInputElement() {
  inputEle.value = getTypeWord()
  inputEle.setAttribute('value', getTypeWord())
}
function handleSuggestWordBtnClick(event) {
  handleSuggestWordClick(event)
  renderTypeWordToInputElement()
  renderSuggestWordListShowOrNot()
}
function createNewSuggestWordListDOM() {
  const result = getSuggestWordList().map(word => {
    const buttonEle = createHTMLElement('button', [
      { key: 'type', value: 'button' },
      { key: 'class', value: 'suggest_word_btn' },
    ])
    buttonEle.textContent = word
    buttonEle.addEventListener('click', handleSuggestWordBtnClick)
    return buttonEle
  })
  return result
}
function clearInnerHTMLOfSuggestWrapper() {
  while (editSuggestWordListDOMMethods.getFirstElementChild() !== null) {
    editSuggestWordListDOMMethods.removeSpecificChild(editSuggestWordListDOMMethods.getFirstElementChild())
  }
}
function addNewSuggestWordListDOMToSuggestWrapper(newSuggestWordListDOM = []) {
  newSuggestWordListDOM.forEach(newSuggestWordDOM => {
    editSuggestWordListDOMMethods.appendChildToTheEnd(newSuggestWordDOM)
  })
}

function handleInputChange(event) {
  handleUserInputChange(event)
  renderTypeWordToInputElement()
  updateSuggestWordList()
  renderSuggestWordListShowOrNot()
  clearInnerHTMLOfSuggestWrapper()
  const newSuggestWordListDOM = createNewSuggestWordListDOM()
  addNewSuggestWordListDOMToSuggestWrapper(newSuggestWordListDOM)
}

inputEle.addEventListener('input', handleInputChange)
inputEle.value = getTypeWord()
