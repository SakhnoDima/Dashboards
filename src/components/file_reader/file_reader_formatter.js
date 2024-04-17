// import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';

export const parseXlsxData = async (fileBuffer) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer); // Завантаження даних з файла
    const worksheet = workbook.getWorksheet(1);

    const columns = {
        numberColumns: [],
        dateColumns: [],
        stringColumns: []
    };

    let formattedData = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        const rowObject = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            const value = cell.value;
            const format = cell.numFmt; // Отримання формату клітинки
            const header = worksheet.getRow(1).getCell(colNumber).value;

            if (rowNumber === 1) {
                if (format) {
                    if (format.includes('yy') || format.includes('yyyy')) {
                        columns.dateColumns.push(header);
                    } else if (format.match(/0*\.?0+%?/) || format.includes('#,##0') || format.includes("₴")) {
                        columns.numberColumns.push(header);
                    } else {
                        columns.stringColumns.push(header);
                    }
                } else if (!value) {
                    return;
                } else {
                    columns.stringColumns.push(header);
                }
            } else {
                if (columns.numberColumns.includes(header)) {
                    if (typeof value === 'string') {
                        // Очищення рядка: видалення символів валюти, заміна ком на крапки та видалення зайвих символів
                        const cleanedValue = value.replace(/[^0-9.,-]/g, '').replace(',', '.');
                        rowObject[header] = cleanedValue ? parseFloat(cleanedValue) : null;
                    } else if (typeof value === 'number') {
                        rowObject[header] = value; // Значення вже є числом
                    } else {
                        // Якщо значення не є ні рядком, ні числом
                        rowObject[header] = value ? value.toString() : null;
                    }
                } else if (columns.dateColumns.includes(header) && value instanceof Date) {
                    rowObject[header] = value.getTime(); // Конвертація дати у Unix timestamp
                } else {
                    rowObject[header] = value;
                }
            }
        });

        if (rowNumber > 1) {
            formattedData.push(rowObject);
        }
    });

    return { convertedData: formattedData, columns };
};



// export const parseXlsxData = (bstr) => {
//     const workbook = XLSX.read(bstr, { type: "binary" });
//     const wsname = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[wsname];
//     const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//
//     const firstRow = data[0]; // Перший рядок містить заголовки
//     const secondRow = data[1]; // Другий рядок для визначення типу даних
//
//     const columns = {
//         numberColumns: [],
//         dateColumns: [],
//         stringColumns: []
//     };
//
//     // Функції для визначення типу
//     const isNumeric = value => !isNaN(value) && isFinite(value);
//     const isDate = value => !isNaN(Date.parse(value));
//
//     // Визначення типу стовпців на основі другого рядка
//     Object.keys(secondRow).forEach(key => {
//         const sampleValue = secondRow[key];
//         if (isNumeric(sampleValue)) {
//             columns.numberColumns.push(firstRow[key]); // Записуємо заголовок
//         } else if (isDate(sampleValue)) {
//             columns.dateColumns.push(firstRow[key]);
//         } else {
//             columns.stringColumns.push(firstRow[key]);
//         }
//     });
//
//     // Обробляємо всі рядки, крім перших двох
//     const formattedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).slice(2).map((row) => {
//         let rowObject = {};
//         firstRow.forEach((header, index) => {
//             if (row[index] !== undefined && row[index] !== "") {
//                 rowObject[header] = row[index];
//             }
//         });
//         return rowObject;
//     });
//
//     const convertedData = formattedData.filter((row) => {
//         return (
//             Object.keys(row).length > 0 &&
//             Object.values(row).some(value => value !== "")
//         );
//     });
//
//     return { convertedData, columns };
// };
