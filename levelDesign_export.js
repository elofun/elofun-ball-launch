const fs = require('fs')
const xlsx = require('xlsx')

let level = [];

function LoadText(fileName)
{
    return new Promise((resolve, reject) => {
        const workbook = xlsx.readFile(fileName)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]

        let rowIndex = 2
        let count = 0
        let itemNumber = sheet[`A${rowIndex}`]
        
        while(itemNumber) {
            let startIndex = parseInt(sheet[`B${rowIndex}`].w);
            let directionChangeRate = parseFloat(sheet[`C${rowIndex}`].w);
            let diamondSpawnRate = parseFloat(sheet[`D${rowIndex}`].w);
            let doubleWay2Rate = parseFloat(sheet[`F${rowIndex}`].w);
            let doubleWay1Rate = parseFloat(sheet[`E${rowIndex}`].w);

            level[count++] = {
                startIndex: startIndex,
                directionChangeRate: directionChangeRate,
                diamondSpawnRate: diamondSpawnRate,
                doubleWay2Rate: doubleWay2Rate,
                doubleWay1Rate: doubleWay1Rate,
            }

            rowIndex++
            itemNumber = sheet[`A${rowIndex}`]
        }

        resolve()
    })
}

function SaveData()
{
	fs.writeFileSync('assets/levelDesign.js', 'export default ' + JSON.stringify(level))
}

let promises = []
promises.push(LoadText('levelDesign.xlsx'))

Promise.all(promises)
    .then(() => SaveData())
