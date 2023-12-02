import * as fs from 'fs';
import * as _ from 'lodash'

export default function Main() {

    const inputFileUrl = 'Input Tag 1.txt'

    const InputFile = fs.readFileSync(inputFileUrl,'utf8');

    const splittedLines = InputFile.split("\n")

    const result: any[][]= [];

    let endResult = 0;

    let firstNumber =  false;

    let numberPlace = 0;

    for (let i = 0; i < splittedLines.length; i++) {
        result[i] = [];
    }
    

    //x = Line
    //y = Char
    for (let x = 0; x < splittedLines.length; x++) {
        for (let y = 0; y < splittedLines[x].length; y++) {
            if (parseInt(splittedLines[x][y])) {
                if (!result[x][numberPlace] && firstNumber === false) {
                    //console.log(splittedLines[x][y])
                    result[x][numberPlace] = splittedLines[x][y]
                    numberPlace++;
                    firstNumber = true
                }
                if (firstNumber) {
                    //console.log(splittedLines[x][y])
                    result[x][numberPlace] = splittedLines[x][y]
                }
                if (splittedLines[x].length === y) {
                    result[x][1] = result[x][0]
                }
            }
        }
        numberPlace = 0;
        firstNumber = false
    }

    let calculator 

    //calculate result
    for (let i = 0; i < splittedLines.length; i++) {
        calculator = result[i][0].concat(result[i][1].toString())
        endResult = endResult + Number(calculator)
    }

    console.log(endResult)
}

Main();
