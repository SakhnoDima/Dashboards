import React, { useState } from "react";
import * as XLSX from 'xlsx';

function FileUploader() {
    const [fileData, setFileData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (evt) => {
            // parse data
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            // get first worksheet
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // convert array of arrays
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            setFileData(data);

            const filteredData = data.filter(row => row.some(cell => cell !== ""));
            setFileData(filteredData);
        };

        reader.readAsBinaryString(file);
    };

    console.log(fileData)

    return (
        <div>
            <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
            {/*<pre>{JSON.stringify(fileData, null, 2)}</pre>*/}
        </div>
    );
}

export default FileUploader;