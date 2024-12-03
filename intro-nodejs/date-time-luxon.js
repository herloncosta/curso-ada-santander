const { DateTime, Interval } = require('luxon')

const now = DateTime.now()
console.log(now.day)
console.log(now.hour)
console.log(now.month)
console.log(now.year)
console.log(now.weekdayShort)
console.log(now.weekdayLong)

const actualDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
console.log(actualDateTime)

const unixTimestampInMilliseconds = DateTime.fromMillis(1542674993410)
const unixTimestampInSeconds = DateTime.fromSeconds(1542674993)

console.log(unixTimestampInMilliseconds)
console.log(unixTimestampInSeconds)

const frenchDateFormat = DateTime.fromISO('2014-08-06T13:07:04.054')
    .setLocale('fr')
    .toFormat('yyyy LLL dd')
console.log(frenchDateFormat)

const birthday = DateTime.fromISO('1989-01-10')
const age = Interval.fromDateTimes(birthday, now).length('years').toPrecision(2)

console.log(`Você tem ${age} anos!`)
