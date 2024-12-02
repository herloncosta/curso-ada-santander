// fetch('http://localhost:3000/api')
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// refactoring with good practices
const makeRequest = async url => {
    try {
        const response = await fetch(url)
        const data = await response.text()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

const main = async () => {
    await makeRequest('http://localhost:3000/api')
}

main()
