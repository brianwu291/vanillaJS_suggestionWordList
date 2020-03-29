function manipulateDOM(parentsNode) {
  const result = {
    getFirstElementChild() {
      return parentsNode.firstElementChild
    },
    appendChildToTheEnd(child) {
      parentsNode.appendChild(child)
    },
    removeSpecificChild(child) {
      parentsNode.removeChild(child);
    },
    replaceOldChildWithNewChild(newChild, oldChild) {
      parentNode.replaceChild(newChild, oldChild)
    },
    insertBeforeSpecificChild(newChild, referenceChild) {
      parentNode.insertBefore(newChild, referenceChild)
    },
  }
  return result
}

export default manipulateDOM
