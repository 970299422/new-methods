
const app = {
  init:this.init()
}
init = () =>{
  this.initActivityListData()
}
//数据处理
initActivityListData = (shortVideoList) => {
        
    if (shortVideoList) {
      const dataTemp = Object.assign([], shortVideoList)
      var pageData = []
      if (dataTemp.length > 0) {
        const count = 2

        for (let i = 0; i < dataTemp.length; i++) {
          let page = Math.floor(i / count)
          pageData[page] = pageData[page] || []
          pageData[page].push(dataTemp[i])
        }
      }
      this.showActInfoList = pageData
    } else {
      this.showActInfoList = []
    }
    
}