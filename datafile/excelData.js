var exceldata=require('xlsx')

var wb=exceldata.readFile("C:/Users/FCI1286/Desktop/webdriverio_demo/exceldata.xlsx")

var ws = wb.Sheets['Sheet1']  // if u have more sheets sheet2

var data=exceldata.utils.sheet_to_json(ws);
module.exports={data}