const fortunes = [
  "Conquer your fears or they will conquer you",
  "Rivers need spring.",
  "Do not fear wht you don't know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple"
]

const getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
}

module.exports = getFortune
