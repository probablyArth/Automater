
export default function automate(folderPath, sheetPath, imgCols, nameCol, apiKey) {
    
    fetch("http://localhost:4000/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({folderPath: folderPath, sheetPath:sheetPath, imgCols:imgCols, nameCol: nameCol, apiKey: apiKey})
    }).then((e) => e.json()).then((data) => console.log(data))
    .catch((err) => console.log(err))

}