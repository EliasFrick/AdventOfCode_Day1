import * as fs from 'fs';
import * as _ from 'lodash'

export default function Main() {

    const inputFileUrl = 'Input.txt'

    const InputFile = fs.readFileSync(inputFileUrl,'utf8');

    //const splittedLines = InputFile.split("\n")
    const splittedLines = InputFile.split("\n")
    const splittedWords = InputFile.split(" ")

    const result: any[][]= [];

    let correctGame = true

    let sumGameIDs = 0

    let red = 0
    let blue = 0
    let green = 0

    const GameID = 5
    let twoGameIDs = false
    let threeGameIDs = false

    let counter = 0

    splittedLines.forEach((value) => {
        let currentLine = ""
        if (!twoGameIDs && !threeGameIDs) {
            currentLine = splittedLines[Number(value[GameID]) - 1]
        }
        else if (twoGameIDs && !threeGameIDs) {
            currentLine = splittedLines[Number("" + value[GameID] + value[GameID + 1]) - 1]
        }
        else if (threeGameIDs && !twoGameIDs) {
            currentLine = splittedLines[Number("" + value[GameID] + value[GameID + 1] + value[GameID + 2]) - 1]
        }
        
        const currentLineWords = currentLine.split(" ")
        correctGame = true
        counter++


        for (let i = 0; i < currentLineWords.length; i++) {
            if (currentLineWords[i].includes("red")){
                red = red + Number(currentLineWords[i - 1])
            }
            if (currentLineWords[i].includes("blue")){
                blue = blue + Number(currentLineWords[i - 1])
            }
            if (currentLineWords[i].includes("green")){
                green = green + Number(currentLineWords[i - 1])
            }

            if (value[GameID] === "9") {
                twoGameIDs = true
            }
            if ("" + value[GameID] + value[GameID + 1] === "99") {
                twoGameIDs = false
                threeGameIDs = true
            }

            if (red > 12 || green > 13 || blue > 14) {   
                correctGame = false
            }

            //Reset if the string containts a ";"
            if (currentLineWords[i].includes(";")) {
                red = 0
                blue = 0
                green = 0
            }
        }

        

        if (correctGame) {
            //const fullGameID = value[GameID].concat(value[GameID] + 1)
            //console.log(fullGameID)
            if (!twoGameIDs && !threeGameIDs) {
                sumGameIDs = sumGameIDs + Number(value[GameID])
            }
            else if (twoGameIDs && !threeGameIDs) {
                sumGameIDs = sumGameIDs + Number("" + value[GameID] + value[GameID + 1])
            } else if (threeGameIDs && !twoGameIDs) {
                sumGameIDs = sumGameIDs + Number("" + value[GameID] + value[GameID + 1] + value[GameID + 2])
            }
            
            //sumGameIDs = sumGameIDs + Number(value[GameID])
            red = 0
            green = 0
            blue = 0
        }
        else{
            red = 0
            green = 0
            blue = 0
        }

    })
    console.log(sumGameIDs)
}

Main();