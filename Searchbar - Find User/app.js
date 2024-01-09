const body = document.body
const usersDiv = document.createElement('div')
body.appendChild(usersDiv)

const ulTag = document.createElement('ul')
ulTag.className = 'users'
usersDiv.appendChild(ulTag)

const users = {
  //   user1: 'a',
  user1: { firstName: 'Ilhan' },
  user2: { firstName: 'Carl' },
  user3: { firstName: 'Lupe' },
  user4: { firstName: 'Katherine' },
  user5: { firstName: 'Kelly' },
  user6: { firstName: 'Kurt' },
  user7: { firstName: 'Fred' },
  user8: { firstName: 'Chris' },
  user9: { firstName: 'Per' },
}

for (let [key, user] of Object.entries(users)) {
  const liTag = document.createElement('li')
  ulTag.appendChild(liTag)
  liTag.textContent = user.firstName
  for (let [key, value] of Object.entries(user)) {
    liTag.className = key
  }
}
