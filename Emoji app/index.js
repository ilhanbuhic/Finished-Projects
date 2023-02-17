// const myEmojis = ["👨‍💻", "⛷", "🍲"]
const myEmojis = ["👸", "💅", "🏋🏻‍♀️", "🍲"]

// looping through myEmoji array and fetching them
// in a div, as a span
function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

// adding the emoji as the last item in the array
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

// adding the emoji as the first item in the array
const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

// removing last emoji in the array
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

// removing the first emoji in the array
const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})


// Additional ideas:
// 1. Store emojis under certain name ex: weekendEmojis = [some-emojis], peopleEmojis = [some-emojis]
// 1. We can store these keys and when we click on them, they will add up to containerEmojis

// 2. We can make weighted emojis, type in the number that dictates how large the emoji is going to be on the screen