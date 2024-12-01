const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const promptPromise = {
    question: question =>
        new Promise((resolve, reject) => {
            try {
                prompt.question(question, answer => resolve(answer))
            } catch (error) {
                reject(error)
            }
        }),
    close: _ => prompt.close(),
}

async function askUser() {
    const favoriteNumber = await promptPromise.question("What's your favorite number? ")
    console.log(`Your favorite number multiplied by 2 is ${favoriteNumber}!`)

    const favoriteColor = await promptPromise.question("What's your favorite color? ")
    console.log(`Your favorite color is ${favoriteColor}!`)

    promptPromise.close()
}

function main() {
    askUser()
}

main()
