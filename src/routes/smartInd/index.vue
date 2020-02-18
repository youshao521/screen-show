<template>
  <div class='box'>
    <p class='title'>智慧工业园区运维驾驶舱</p>
    <div class='content'>
      <div class='leftCont'>
        <div class='iconBox'>
          <img
            :key='i'
            :src='"../../assets/smartInd/"+i+".png"'
            class='iconItem'
            v-for='i in iconlist'
          />
        </div>
        <div class='chartBox'>
          <div class='lineChart'>
            <SafetyIndex />
          </div>
          <div class='pieChart'>
            <HiddenDanger />
          </div>
        </div>
        <div class='companyBox'>
          <span class='title'>重点安全监管企业</span>
          <div class='more'>更多</div>
          <div class='companyList'>
            <div class='companyHead'>
              <span class='name'>企业名称</span>
              <span class='risk'>风险等级</span>
              <span class='point'>安全指数</span>
            </div>
            <div
              :key='x.name'
              class='listItem'
              v-for='x in companyList'
            >
              <span class='name'>{{x.name}}</span>
              <span
                class='risk'
                v-if='x.risk<2'
              >
                {{riskDesc[x.risk]}}
                <img src='../../assets/smartInd/低风险.svg' />
              </span>
              <span
                class='risk'
                style='color: #DD0000;'
                v-else
              >
                {{riskDesc[x.risk]}}
                <img src='../../assets/smartInd/高风险.svg' />
              </span>
              <span class='point'>{{x.point}}</span>
            </div>
          </div>
        </div>
        <div class='leftBanner'>
          <div class='name'>高空瞭望</div>
          <div class='more'>更多</div>
        </div>
      </div>
      <div class='centerCont'>
        <div class='head'>
          <div
            :key='x.name'
            class='headItem'
            v-for='x in enterprise'
          >
            <div v-if='x.color'>
              <p class='itemName'>{{x.name}}</p>
              <p
                :style='"color:"+x.color'
                class='itemVal'
              >{{x.val}}</p>
            </div>
            <div v-else>
              <p class='itemName'>{{x.name}}</p>
              <EnterType :data='x.data' />
            </div>
          </div>
        </div>
        <div class='pointTab'>
          <div
            :key='x*Math.random()'
            class='pointItem'
            v-for='(x, i) in point'
          >
            <p
              :style='"background-image: url(../../assets/smartInd/"+pointsName[i]+".png);"'
              class='tabNum'
            >{{x}}</p>
            <p class='tabName'>{{pointsName[i]}}</p>
          </div>
        </div>
        <div class='centerBanner'>
          <img
            alt
            class='actionBtn'
            src='../../assets/smartInd/缩放.png'
          />
          />
          <div
            :style='{
                top: x.top+"px",
                left: x.left+"px"
              }'
            class='posIcon'
            v-for='x in posList'
          >
            <img
              :src='"../../assets/smartInd/"+x.type+".svg"'
              v-if='!x.data'
            />
            <div
              class='posBox'
              v-else
            >
              <img :src='"../../assets/smartInd/"+x.type+".svg"' />
              <div class='tips'>
                <p
                  class='tipsItem'
                  v-for='y in x.data'
                >
                  <span class='name'>{{y.name}}</span>
                  <span
                    :style='{color:y.color}'
                    class='value'
                  >{{y.val}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='rightCont'>
        <div class='rHead'>
          <p class='headTitle'>空气质量检测</p>
          <div class='itemBox'>
            <a-progress
              :percent='AQdata[0]'
              :strokeWidth='10'
              :width='145'
              strokeColor='#2795E3'
              type='dashboard'
            >
              <template v-slot:format='percent'>
                <p style='margin: 12px 0 4px;font-size: 48px;color:#fff;'>{{percent}}</p>
                <span style='font-size: 18px;color:#fff;'>优</span>
              </template>
            </a-progress>
            <div class='dataList'>
              <div
                class='dataItem'
                v-for='(x, i) in AQdata.filter((x,i)=>i>0)'
              >
                <p
                  :style='i%4===3? {color: "#FF4A31"} : {} '
                  class='itemName'
                >{{AQname[i]}}</p>
                <p
                  :style='i%4===3? {color: "#FF4A31"} : {} '
                  class='itemVal'
                >{{x}}ug/m³</p>
              </div>
            </div>
          </div>
        </div>
        <div class='rTips'>
          公用工程能耗
          <p v-for='x in energyCostTip'>
            <span>{{x.name}}</span>
            {{x.val}}
            <img src='../../assets/smartInd/箭头.svg' />
          </p>
        </div>
        <div class='rTab'>
          <div class='lineChart'>
            <EnergyCost />
          </div>
          <div class='energyList'>
            <div
              class='listItem'
              v-for='x in energyList'
            >
              <img :src='"../../assets/smartInd/"+x.name+".svg"' />
              <span class='itemName'>{{x.name}}</span>
              <p class='itemVal'>
                {{x.value}}
                <span>{{x.unit}}</span>
              </p>
              <p
                :style='x.changeType>0?{color:"#FF4A31"}:{color:"#6DD230"}'
                class='itemExtra'
              >{{x.changeType>0?'同比增加':'同比降低'}}{{x.changePer}}%</p>
            </div>
          </div>
          <div class='barChart'>
            <ComplainChart />
          </div>
          <div class='top3Box'>
            <Top3 />
          </div>
        </div>
        <div class='noticeBox'>
          <p class='notiTitle'>通知公告</p>
          <div
            class='noticeList'
            v-for='x in noticeList'
          >
            <div class='item'>
              <span class='itemContent'>{{x.content}}</span>
              <span class='itemDate'>{{x.date}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top3 from './Top3'
import ComplainChart from './ComplainChart'
import EnergyCost from './EnergyCost'
import HiddenDanger from './HiddenDanger'
import EnterType from './EnterType'
import SafetyIndex from './SafetyIndex'
import {
  noticeList,
  energyList,
  posList,
  pointsName,
  points,
  enterprise,
  iconlist,
  companyList,
  riskDesc,
  AQname,
  airQuality,
  energyCostTip,
} from '../../mock/smartInd_mock'
export default {
  name: 'ProductionControl',
  components: {
    Top3,
    ComplainChart,
    EnergyCost,
    EnterType,
    SafetyIndex,
    HiddenDanger,
  },
  data() {
    return {
      noticeList,
      energyList,
      energyCostTip,
      AQname,
      AQdata: [],
      AQindex: 0,
      posList,
      pointsName,
      point: [],
      pointIndex: 0,
      enterprise,
      iconlist,
      companyList,
      riskDesc,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.pointChange()
      this.airQualityChange()
    },
    pointChange() {
      this.point = points[this.pointIndex]
      setInterval(() => {
        if (this.pointIndex < points.length - 1) {
          this.pointIndex += 1
        } else {
          this.pointIndex = 0
        }
        this.point = points[this.pointIndex]
      }, 60 * 1000)
    },
    airQualityChange() {
      this.AQdata = airQuality[this.AQindex]
      setInterval(() => {
        if (this.AQindex < airQuality.length - 1) {
          this.AQindex += 1
        } else {
          this.AQindex = 0
        }
        this.AQdata = airQuality[this.AQindex]
      }, 60 * 1000)
    },
  },
  destroyed() {
    // console.log(this.timer)
    // clearTimeout(this.timer)
    // this.timer = null
  },
}
</script>
<style lang='less' scoped>
@import './styles.less';
</style>
