/**
 * Device
 */

import { post, get } from './http'


/**
 * 获取公司节点
 * @param {*} p
 */
export const getNode = () => get('/api/metadata/organization/orgs/v1/Company_default_org_company/nodes?orgType=Department&isAll=true')

/**
 * 获取校验
 * @param {*} p
 */
export const getValid = p => post('/api/runtime/objects/zhxy_process/services/uniqueCodeValidate', p)

/**
 * 新增工艺模型
 * @param {*} p
 */
export const addProcess = p => post('/api/runtime/objects/zhxy_process/services/addProcess', p)

/**
 * 复制工艺模型
 * @param {*} p
 */
export const copyProcess = p => post('/api/runtime/objects/zhxy_process/services/copyProcess', p)


/**
 * 获取工艺模型列表
 * @param {*} p
 */
export const findProcessList = p => post('/api/runtime/objects/zhxy_process/services/findProcessList', p)

/**
 * 获取历史工艺模型列表
 * @param {*} p
 */
export const findHistoryProcessList = p => post('/api/runtime/objects/zhxy_process/services/findHistoryProcessList', p)


/**
 * 获取工艺模型详情
 * @param {*} p
 */
export const getProcess = p => post('/api/runtime/objects/zhxy_process/services/getProcessById', p)

/**
 * 获取标准线
 * @param {*} p
 */
export const getStandardGraphData = p => post('/api/runtime/objects/zhxy_process/services/getStandardGraphData', p)


/**
 * 获取实时曲线
 * @param {*} p
 */
export const getRuntimeGraphData = p => post('/api/runtime/objects/zhxy_process/services/getRuntimeGraphData', p)



/**
 * 工艺启停设置
 * @param {*} p
 */
export const setOnOff = p => post('/api/runtime/objects/zhxy_process/services/setOnOff', p)

/**
 * 更新工艺模型详情
 * @param {*} p
 */
export const updateProcess = p => post('/api/runtime/objects/zhxy_process/services/updateProcess', p)

/**
 * 删除工艺模型
 * @param {*} p
 */
export const deleteProcess = p => post('/api/runtime/objects/zhxy_process/services/deleteProcess', p)

/**
 * 关联设置-未绑定产品
 * @param {*} p
 */
export const findUnbindProductList = p => post('/api/runtime/objects/zhxy_process/services/findUnbindProductList', { ...p })

/**
 * 关联设置-已绑定产品
 * @param {*} p
 */
export const findBindProductList = p => post('/api/runtime/objects/zhxy_process/services/findBindProductList', { ...p })

/**
 * 关联设置-设备
 * @param {*} p
 */
export const findDeviceWithprocessId = p => post('/api/runtime/objects/zhxy_process/services/findDeviceWithprocessId', { ...p })

/**
 * 曲线图-获取流程卡
 * @param {*} p
 */
export const getFlowCard = p => post('/api/runtime/objects/zhxy_process/services/findFlowCardList', { ...p })

/**
 * 曲线图-获取历史流程卡号列表
 * @param {*} p
 */
export const findHistoryFlowCard = p => post('/api/runtime/objects/zhxy_process/services/findHistoryFlowCardList', p)


/**
 * 阶段名称-添加
 * @param {*} p
 */
export const addConfigStep = p => post('/api/runtime/objects/zhxy_config/services/addConfigStep', p)

/**
 * 阶段名称-查询
 * @param {*} p
 */
export const findConfigStepList = p => post('/api/runtime/objects/zhxy_config/services/findConfigStepList', p)

/**
 * 阶段名称-删除
 * @param {*} p
 */
export const deleteConfigStep = p => post('/api/runtime/objects/zhxy_config/services/deleteConfigStep', p)

/**
 * 启用
 * @param {*} p
 */
export const setOn = p => post('/api/runtime/objects/zhxy_process/services/setOn', p)

/**
 * 关联设置-绑定
 * @param {*} p
 */
export const setProductAndProcessRelevance = p => post('/api/runtime/objects/zhxy_process/services/setProductAndProcessRelevance', p)

/**
 * 关联设置-解绑
 * @param {*} p
 */
export const setProductAndProcessUnbind = p => post('/api/runtime/objects/zhxy_process/services/setProductAndProcessUnbind', p)

/**
 * 人员&设备-查询全部设备
 * @param {*} p
 */
export const getAllDeviceForPerson = p => post('/api/runtime/objects/zhxy_process/services/getAllDeviceForPerson', p)


/**
 * 人员&设备-查询全部人员
 * @param {*} p
 */
export const getDeviceUnbindingPerson = p => post('/api/runtime/objects/zhxy_process/services/getDeviceUnbindingPerson', p)

/**
 * 人员&设备-查询已经绑定设备的人员
 * @param {*} p
 */
export const getDeviceBindingPerson = p => post('/api/runtime/objects/zhxy_process/services/getDeviceBindingPerson', p)

/**
 * 人员&设备-人员解绑
 * @param {*} p
 */
export const deviceBindingPerson = p => post('/api/runtime/objects/zhxy_process/services/deviceBindingPerson', p)

/**
 * 人员&设备-人员绑定
 * @param {*} p
 */
export const deviceUnbindingPerson = p => post('/api/runtime/objects/zhxy_process/services/deviceUnbindingPerson', p)

/**
 * 人员&设备-设备维护
 * @param {*} p
 */
export const setRepair = p => post('/api/runtime/objects/zhxy_process/services/setRepair', p)

/**
 * 查询曲线配置
 *
 */
export const getPropertyVQTValue = () => post('/api/runtime/objects/zhxy_config/services/getPropertyVQTValue', { 'objName': 'zhxy_config', 'propName': 'propFlowParams' })
