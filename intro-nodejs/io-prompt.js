const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

prompt.question('What is your favorite number?: ', (answer) => {
    console.log('Your favorite number multiplied by 2 is: ' + parseInt(answer) * 2)
    prompt.close()
})
