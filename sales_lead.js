const ChartMogul = require('chartmogul-node');
const config = new ChartMogul.Config('73ac84b913bd187f3b06e59efdfeba59');

const getSalesPerson = () => {
    const items = ['Bill Gates', 'Tim Cook', 'Steve Jobs', 'Larry Ellison']
    return items[Math.floor(Math.random()*items.length)]
}

(async () => {
    const customers = await ChartMogul.Customer.all(config, { page: 1, per_page: 50 })
    for(let cus of customers.entries){
        ChartMogul.CustomAttribute.add(config, cus.uuid, {
            'custom': [
                { 'type': 'String', 'key': 'Sales_Lead', 'value': getSalesPerson() }
            ]
        });
    }
})()
