
/**
 *
 * @param {*} min
 * @param  {*} max
 * @param {*} n 保留n位小数
 */
export function getR(min = 0,max = 0.5,n = 2) {
  const rand = Number((Math.random() * (max - min) + min).toFixed(n))
  // console.log(rand)
  return rand
}
