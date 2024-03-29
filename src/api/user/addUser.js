/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2019-12-07 16:31:58
 * @LastEditors: lxw
 * @LastEditTime: 2019-12-25 14:18:46
 */
// 用户管理--添加用户接口
import request from '@/plugin/axios'

function addManager (data) {
  return request({
    url: `man/insert`,
    method: 'post',
    data
  })
}

function addTeacher (data) {
  return request({
    url: `teacher/insert`,
    method: 'post',
    data
  })
}

function addStudent (data) {
  return request({
    url: `student/insert`,
    method: 'post',
    data
  })
}

export { addManager, addTeacher, addStudent }
