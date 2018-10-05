const Service = require('egg').Service;

class SystemService extends Service {

  /**
   * 系统信息：内存、硬盘空间、CPU使用情况。
   *
   * @returns
   * @memberof SystemService
   */
  async systemInfo(){
    return {a:1}
  }
}



// const si = require('systeminformation')
// async systemSatus () {
//   const result = {
//     mem: {
//       totol: 0, // 总内存空间 单位： MB
//       used: 0, // 已使用空间 单位： MB
//       percentage: 0 // 百分比 单位：%
//     },
//     currentLoad: 0, // CPU平均负载百分比 单位：%
//     fs: []// N个磁盘N个对象 {fs:磁盘名,total:磁盘总空间GB,use:已使用空间百分比}
//   }
//   await si.mem()
//   .then(data => {
//     result.mem.totol = Math.round(data.total / 1024 / 1024)
//     result.mem.used = Math.round(data.active / 1024 / 1024)
//     result.mem.percentage = Math.round(data.active / data.total * 100)
//   })
//   .catch(error => console.error(error))

//   await si.fsSize()
//   .then(data => {
//     data.forEach(value => {
//       const total = Math.round(value.size / 1024 / 1024 / 1024)
//       const use = Math.round(value.use)
//       result.fs.push({fs: value.fs, total: total, use: use})
//       // console.log(`磁盘 ${value.fs} - ${total} GB - 已使用：${use}%`)
//     })
//   })
//   .catch(error => console.error(error))

//   await si.currentLoad()
//   .then(data => {
//     const currentload = Math.round(data.currentload)
//     result.currentLoad = currentload
//     // console.log(`CPU负载:${currentload}%`)
//   })
//   .catch(error => console.error(error))
//   return result
// }

// }

module.exports = SystemService;