const ChartMogul = require('chartmogul-node');
const moment = require('moment/moment');
const config = new ChartMogul.Config('73ac84b913bd187f3b06e59efdfeba59');

(async () => {
    const mrr = await ChartMogul.Metrics.mrr(config, {
        'start-date': '2019-01-01',
        'end-date': '2019-04-30'
    })
    for (let val of mrr.entries){
        const month = moment(val.date).format('MMMM')
        const value = val.mrr/100
        console.log(`${month}: ${value}`)
    }
})()