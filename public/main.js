const update = document.querySelector('#update-button')
const del = document.querySelector('#delete-button')
const message = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            name: 'Replacer hero',
            quote: 'I find ur quote boring...'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload()
    })
})

del.addEventListener('click', _ => {
    fetch( '/quotes', {
        method: 'delete',
        headers:  {'Content-type': 'application/json'},
        body: JSON.stringify({
            name:'Replacer hero'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        if (data === 'No quotes to delete')
            message.textContent = 'No quotes to delete'
        else
            window.location.reload()
    })
})