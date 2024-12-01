const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// prompt.question('What is your favorite number?: ', (answer) => {
//     console.log('Your favorite number multiplied by 2 is: ' + parseInt(answer) * 2)
//     prompt.close()
// })

const promptPromise = {
    question: (question) =>
        new Promise((resolve, reject) => {
            try {
                prompt.question(question, (answer) => resolve(answer))
            } catch (error) {
                reject(error)
            }
        }),
    close: () => prompt.close(),
}

async function main() {
    const number = await promptPromise.question('What is your favorite number?: ')
    console.log('Your favorite number multiplied by 2 is: ' + parseInt(number) * 2)

    const color = await promptPromise.question('What is your favorite color?: ')
    console.log('Your favorite color is: ' + color)

    promptPromise.close()
}

main()
