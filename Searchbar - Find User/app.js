const users = {
    user1: {firstName: 'Ilhan'},
    user2: {firstName: 'Carl'},
    user3: {firstName: 'Lupe'},
    user4: {firstName: 'Katherine'},
    user5: {firstName: 'Kelly'},
    user6: {firstName: 'Kurt'},
    user7: {firstName: 'Fred'},
    user8: {firstName: 'Chris'},
    user9: {firstName: 'Per'},
}

for (let [key, value] of users) {
    console.log(key);
}

document.getElementById('search-input').addEventListener('keyup', function(event) {
    let seachQuery = event.target.value.toLowerCase()
    let allNameDOMCollection = document.getElementsByClassName('firstName')
})
``