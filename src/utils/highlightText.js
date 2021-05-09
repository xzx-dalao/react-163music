export function highlightText(text, keyword) {
    let reg = new RegExp(keyword, 'g')
    let newStr = text.replace(reg, `<span  style="color:#0c73c2;">${keyword}</span>`)
    return newStr
  }