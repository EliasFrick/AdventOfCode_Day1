import * as fs from 'fs';
import * as _ from 'lodash'

export default function Main() {

    const inputFileUrl = 'Input Tag 1.txt'

    const InputFile = fs.readFileSync(inputFileUrl,'utf8');

    const splittedLines = InputFile.split("\n")

    const result: any = [];

    //x = Line
    //y = Char
    for (let x = 0; x < splittedLines.length; x++) {
        for (let y = 0; y < splittedLines[x].length; y++) {
            if (parseInt(splittedLines[x][y])) {
                console.log(splittedLines[x][y])
                result[y] = splittedLines[x][y]
            }
        }
    }

    // console.log(_.isNumber(splittedLines[0][5]))
    // console.log(parseInt(splittedLines[0][5]))
    // console.log(_.isNumber(5))
}

Main();
