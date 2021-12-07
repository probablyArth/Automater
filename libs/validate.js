import automate from "./automate"

export default function validate(folderPath, sheetPath, imgCols=[], nameCol, apiKey, setError) {
    let good = true

    for (let col in imgCols) {
        if (col === "") {
            good = false

            break
        }
    }
    if (imgCols){
        if (imgCols.length >= 8 && good && folderPath && sheetPath && nameCol && apiKey) {
            automate(folderPath, sheetPath, imgCols, nameCol, apiKey)
        } else {
            setError("Please fill all the fields 🙏")
            console.log("error");
        }
    }
}

