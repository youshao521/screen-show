import moment from 'moment'

/** token 操作 方便将来统一修改存储方式*/

export function getToken() {
  return sessionStorage.getItem('X_Session_Token')
}

/** end */

/**
 *  获取数据类型
 * @param {*} i
 */
export function _typeof(i) {
  let type = Object.prototype.toString.call(i);
  switch (type) {
    case '[object Array]':
      type = 'Array';
      break;
    case '[object Object]':
      type = 'Object';
      break;
    case '[object String]':
      type = 'String';
      break;
    case '[object Boolean]':
      type = 'Boolean';
      break;
  }
  return type
}

/**
 *  格式化
 * @param {*} v
 */
export function format(v, style = 'YYYY-MM-DD HH:mm:ss') {
  return moment(v).format(style)
}
