function createHTMLElement(tagName = '', attributeList = []) {
  const element = document.createElement(tagName)
  const hasAttributeToSet = attributeList.length > 0
  if (hasAttributeToSet) {
    attributeList.forEach((attributeKeyValueObj) => {
      const keyName = attributeKeyValueObj.key
      const value = attributeKeyValueObj.value
      element.setAttribute(keyName, value)
    })
  }
  return element
}

export default createHTMLElement
