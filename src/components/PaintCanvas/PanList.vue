<template>
  <div class="pan-list">
    <div
      class="pan"
      :class="{ active: item.id === activePan }"
      v-for="(item, i) in panList"
      :key="i"
      :style="{ backgroundColor: item.color, left: `${i + 1}0%` }"
      @click="handleActive(item)"
    >
      {{ item.name }}
    </div>
    <div class="property">
      <svg width="50px" height="50px" class="svg">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgb(255, 0, 0)" />
            <stop offset="16.66%" stop-color="rgb(255, 255, 0)" />
            <stop offset="33.33%" stop-color="rgb(0, 255, 255)" />
            <stop offset="66.66%" stop-color="rgb(0, 0, 255)" />
            <stop offset="83.33%" stop-color="rgb(255, 0, 255)" />
            <stop offset="100%" stop-color="rgb(255, 0, 0)" />
          </linearGradient>
        </defs>
        <circle
          r="20"
          cy="25"
          cx="25"
          stroke-width="4"
          stroke="url(#linear)"
          stroke-linejoin="round"
          stroke-linecap="round"
          :fill="isPan ? '#00000000' : 'url(#linear)'"
        />
      </svg>
      <div class="color-tools">
        <div class="select-color">
          <n-color-picker
            class="color-picker-mask"
            :modes="['hex']"
            v-model:value="activeColor"
          ></n-color-picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import { NColorPicker } from "naive-ui";
export default defineComponent({
  components: {
    NColorPicker
  },
  setup() {
    const DEFAULT_COLOR = "#00000000";
    const activePan = ref<null | number>(null);
    const activeColor = ref<string>(DEFAULT_COLOR);
    const panList = ref([
      {
        id: 1,
        name: "画笔",
        color: "#000000"
      },
      {
        id: 2,
        name: "标记笔",
        color: "#ffff00"
      },
      {
        id: 3,
        name: "铅笔",
        color: "#0000ff"
      },
      {
        id: 4,
        name: "橡皮",
        color: "#808080"
      }
    ]);
    const isPan = computed(() => {
      return DEFAULT_COLOR !== activeColor.value;
    });
    // method
    const handleActive = (item: IObj) => {
      activePan.value = item.id;
      if (item.id === 4) {
        activeColor.value = "#00000000";
      } else {
        activeColor.value = item.color;
      }
    };
    watchEffect(() => {
      const pan = panList.value.find(m => m.id === activePan.value);
      if (pan && pan.id !== 4) {
        pan.color = activeColor.value ?? DEFAULT_COLOR;
      }
    });
    return {
      activePan,
      activeColor,
      panList,
      // computed
      isPan,
      // method
      handleActive
    };
  }
});
</script>
<style lang="css" scoped>
.pan-list {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: rgb(227 247 255 / 50%);
}
.pan-list .pan {
  text-shadow: 1px 1px 2px black;
  position: absolute;
  bottom: -50px;
  width: 50px;
  height: 200px;
  cursor: pointer;
  opacity: 0.5;
  /* animation */
  animation-duration: 0.5s;
  animation-name: slideout;
  animation-timing-function: cubic-bezier(0.1, 1.34, 0.74, 1.23);
}
.pan-list .pan.active {
  bottom: -30px;
  /* animation */
  animation-duration: 0.5s;
  animation-name: slidein;
  animation-timing-function: cubic-bezier(0.1, 1.34, 0.74, 1.23);
}
.pan-list .property {
  position: absolute;
  right: 20%;
  top: 45%;
}
.property .color-tools {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: "#00000000";
  /* background-image: conic-gradient(
    red,
    rgb(255, 255, 0) 16.66%,
    rgb(0, 255, 0) 33.33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 66.66%,
    rgb(255, 0, 255) 83.33%,
    red
  ); */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
}
.svg {
  position: absolute;
}
.color-tools .select-color {
  margin: auto;
  background-color: v-bind(activeColor);
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.select-color .color-picker-mask {
  position: absolute;
  opacity: 0;
  width: 30px;
  height: 30px;
  overflow: hidden;
}
@keyframes slidein {
  from {
    bottom: -50px;
  }

  to {
    bottom: -30px;
  }
}
@keyframes slideout {
  from {
    bottom: -30px;
  }

  to {
    bottom: -50px;
  }
}
</style>
