import request from '@/utils/request'  

export function setPos(eply) {
    return request({
      url: '/employee/updatePos',
      method: 'post',
      data : eply
    })
}

export function getAllEplys() {
  return request({
    url: '/employee/all',
    method: 'get',
  })
}

export function addEply(eply) {
  return request({
    url: '/employee/add',
    method: 'post',
    data: eply
  })
}

export function delEmply(id) {
  return request({
    url: '/employee/delById',
    method: 'get',
    params:{
      id:id
    }
  })
}

export function getEmplyNum() {
  return request({
    url: '/employee/count',
    method: 'get',
  })
}