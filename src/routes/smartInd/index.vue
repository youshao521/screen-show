<template>
  <div class='box'>
    <p class='title'>智慧工业园区运维驾驶舱</p>
    <div class='content'>
      <div class='leftCont'>
        <div class="iconBox">
          <img v-for="i in iconlist" :key='i' class="iconItem" :src="'../../assets/smartInd/'+i+'.png'" />
        </div>
        <div class="chartBox">
          <div class="lineChart">
            <SafetyIndex />
          </div>
          <div class="pieChart">
            <HiddenDanger />
          </div>
        </div>
        <div class="companyBox">
          <span class="title">重点安全监管企业</span>
          <div class="more">更多</div>
          <div class="companyList">
            <div class="companyHead">
              <span class="name">企业名称</span>
              <span class="risk">风险等级</span>
              <span class="point">安全指数</span>
            </div>
            <div v-for='x in companyList' :key='x.name' class="listItem">
              <span class="name">{{x.name}}</span>
              <span v-if="x.risk<2" class="risk">{{riskDesc[x.risk]}}
                <img src="../../assets/smartInd/低风险.svg">
              </span>
              <span v-else class="risk" style="color: #DD0000;">{{riskDesc[x.risk]}}
                <img src="../../assets/smartInd/高风险.svg">
              </span>
              <span class="point">{{x.point}}</span>
            </div>
          </div>
        </div>
        <div class="leftBanner">
          <div class="name">高空瞭望</div>
          <div class="more">更多</div>
        </div>
      </div>
      <div class='centerCont'>
        <div class="head">
          <div v-for="x in enterprise" :key='x.name' class="headItem">
            <div v-if='x.color'>
              <p class="itemName">{{x.name}}</p>
              <p class="itemVal" :style="'color:'+x.color">{{x.val}}</p>
            </div>
            <div v-else>
              <p class="itemName">{{x.name}}</p>
              <EnterType :data='x.data' />
            </div>
          </div>
        </div>
        <div class="pointTab">
          <div v-for="(x, i) in point" :key='x*Math.random()' class="pointItem">
            <p class="tabNum" :style="'background-image: url(../../assets/smartInd/'+pointsName[i]+'.png);'">{{x}}</p>
            <p class="tabName">{{pointsName[i]}}</p>
          </div>
        </div>
        <div class="centerBanner">
          <img class="actionBtn" src="../../assets/smartInd/缩放.png" alt="">
          
          <div
            v-for='x in posList'
            class="posIcon"
            :style="{
                top: x.top+'px',
                left: x.left+'px'
              }"
          >
            <img
              v-if="!x.data"
              :src="'../../assets/smartInd/'+x.type+'.svg'"
            >
            <div
              v-else
              class="posBox"
            >
              <img
                :src="'../../assets/smartInd/'+x.type+'.svg'"
              >
              <div class="tips">
                <p
                  v-for="y in x.data"
                  class="tipsItem"
                >
                  <span class="name">{{y.name}}</span>
                  <span
                    class="value"
                    :style="{color:y.color}"
                  >{{y.val}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='rightCont'>
      </div>
    </div>
  </div>
</template>

<script>
  import HiddenDanger from './HiddenDanger'
  import EnterType from './EnterType'
  import SafetyIndex from './SafetyIndex'
  import {
    posList,
    pointsName,
    points,
    enterprise,
    iconlist,
    companyList,
    riskDesc,
  } from '../../mock/smartInd_mock'
  export default {
    name: 'ProductionControl',
    components: {
      EnterType,
      SafetyIndex,
      HiddenDanger
    },
    data() {
      return {
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

      }
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
