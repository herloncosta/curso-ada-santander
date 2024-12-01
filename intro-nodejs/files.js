const path = require('node:path')
const fs = require('node:fs')
const rl = require('readline')

const filePath = path.join(process.cwd(), 'file.txt')
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// read a file
fs.readFile(filePath, { encoding: 'utf-8' }, async (error, data) => {
    if (error) {
        console.error(error)
        return
    }

    const lines = data.toString().split('\n')
    const enumeratedLines = lines.reduce((acc, line, index) => {
        return acc + `${index + 1}. ${line}\n`
    }, '')

    prompt.question('Enter a filename: ', filename => {
        fs.writeFile(path.join(process.cwd(), filename), enumeratedLines, error => {
            if (error) {
                console.error(error)
                return
            }
            console.log(`${filename} created`)
        })
        prompt.close()
    })
})
