const dns = require('node:dns')

const searchedUrl = 'google.com.br'

async function resolveARecords(url) {
    try {
        const addresses = await dns.promises.resolve4(searchedUrl)
        console.log(`A Records DNS: ${addresses}`)
    } catch (err) {
        console.log(`Error resolviing A records: ${err}`)
    }
}

async function resolveNameServers(url) {
    try {
        const addresses = await dns.promises.resolveNs(url)
        console.log(`Name Servers DNS: ${addresses.join(' - ')}`)
    } catch (err) {
        console.log(`Error resolviing Name Servers: ${err}`)
    }
}

function resolveWithCustomServers(url) {
    const resolver = new dns.Resolver()
    resolver.setServers(['8.8.8.8', '1.1.1.1'])
    resolver.resolve4(url, (err, addresses) => {
        if (err) {
            console.log(`Error resolving A records: ${err}`)
            return
        }
        console.log(`A Records DNS with custom servers: ${addresses.join(' - ')}`)
    })
}

async function bootstrap() {
    await resolveARecords(searchedUrl)
    await resolveNameServers(searchedUrl)
    resolveWithCustomServers(searchedUrl)
}

bootstrap()
