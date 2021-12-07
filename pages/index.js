import Image from "next/image"
import { useState } from 'react';
import validate from '../libs/validate';

function App() {

  const [productCol, setProductCol] = useState("");
  const [imgCols, setImgCols] = useState(["", "", "", "", "", "", "", ""]);
  const [sheetPath, setSheetPath] = useState("");
  const [folderPath, setFolderPath] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  return (
      <div className="flex flex-col mx-sm">
        <div  className="font-semibold text-sm self-center">
          Automater
        </div>
        <div className="text-xs grey font-thin self-center">By @arthishere</div>
        <div className="flex mt-12 justify-between">
          <div className="flex flex-col h-main">
            <form className='flex flex-col'>
              <label className="text-base">
                Column for Product ID / SKU Name
              </label>
              <input type="text" className="input mt-3 py-3 px-4" onChange={e => setProductCol(e.target.value)}/>
              <label className="text-base mt-12">
                Columns for Images
              </label>
              <div className="flex flex-row mt-3 justify-between text-center">
                <div className="flex flex-col">
                  <label className="text-xs grey" >
                    #1
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[0] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #2
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[1] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #3
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[2] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #4
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[3] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #5
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[4] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #6
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[5] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #7
                  </label>
                  <input type="text" className="input2" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[6] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs grey">
                    #8
                  </label>
                  <input type="text" className="input2 text-xs" onChange={ (e) => {
                const newImgCols = [...imgCols]
                newImgCols[7] = e.target.value
                console.log(newImgCols);
                setImgCols(newImgCols)
                }
              }/>
                </div>
              </div>
              <label className="text-base mt-12">
                Destination of Excel Sheet
              </label>
              <input type="file" className="mt-3 py-2 px-4" onChange={e => {if (e.target) {
                setSheetPath(e.target.files[0].path)
                }}}/>
              <label className="text-base mt-12">
                Destination of Images Folder
              </label>
              <input webkitdirectory="true" type="file" id="lol" className="mt-3 py-2 px-4"  onChange={e => {if (e.target) {

                let file_path = e.target.files[0].path
                let ind = file_path.lastIndexOf(e.target.files[0].name)
                let folder_path = file_path.slice(0, ind)

                setFolderPath(folder_path)
                }}}/>
              <label className="text-base mt-12">
                API key
              </label>
              <input type="text" className="input mt-4 py-3 px-4" onChange={e => setApiKey(e.target.value)}/>
            </form>
          </div>
          <div className="flex flex-col h-main socials">
            <div className="flex flex-col items-center">
              <Image src="/assets/images/insta3d.png" width="180" height="180"/>
              <div className="text-xs">@probablyarth</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/assets/images/linkedin3d.png" width="180" height="180"/>
              <div className="text-xs">@probablyarth</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/assets/images/twitter3d.png" width="180" height="180"/>
              <div className="text-xs">@probablyarth</div>
            </div>
          </div>
        </div>
        <button type="submit" className="automate" onClick={() => validate(folderPath, sheetPath, imgCols, productCol, apiKey, setError)}>Automate</button>
      </div>
  );
}


export default App;

