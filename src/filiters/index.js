/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-05-02 22:05:39
 * @LastEditors: lxw
 * @LastEditTime: 2020-05-02 22:14:37
 */
function dateFormate (dateVal) {
  if (typeof dateVal === 'number') {
    let date = new Date(dateVal)
    let y = date.getFullYear()
    y = y < 10 ? '0' + y : y
    let m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    let d = date.getDate()
    d = d < 10 ? '0' + d : d
    return `${y}-${m}-${d}`
  }
  throw TypeError(`当成时间戳参数不是数值类型`)
}

export { dateFormate }
