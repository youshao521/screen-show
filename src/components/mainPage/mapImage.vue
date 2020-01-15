
<template>
  <div class="map-image">
    <div
      class="map-image-item"
      v-for="item in data"
      :style="{ top: `${item.top}px`, left: `${item.left}px` }"
    >
      <div class="map-image-title">{{item.name}}</div>
      <div>
        <span class="map-image-num">{{item.gasoline}}</span>
        <span class="map-image-unit">吨</span>
      </div>
      <template v-if="item.name1">
        <div class="map-image-title">{{item.name1}}</div>
        <div>
          <span class="map-image-num">{{item.gasoline1}}</span>
          <span class="map-image-unit">吨</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapImage',
  data() {
    return {
      data: [
        {
          top: 226,
          left: 508,
          name: '汽油',
          gasoline: 26.9
        }, {
          top: 168,
          left: 808,
          name: '汽油',
          gasoline: 11.2
        }, {
          top: 318,
          left: 380,
          name: '汽油',
          gasoline: 23.7
        }, {
          top: 346,
          left: 460,
          name: '汽油',
          gasoline: 16.8,
          name1: '柴油',
          gasoline1: 33.2
        }, {
          top: 432,
          left: 600,
          name: '汽油',
          gasoline: 72.3
        }, {
          top: 378,
          left: 662,
          name: '汽油',
          gasoline: 72.3
        }, {
          top: 384,
          left: 816,
          name: '汽油',
          gasoline: 56.4
        }
      ]
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>
