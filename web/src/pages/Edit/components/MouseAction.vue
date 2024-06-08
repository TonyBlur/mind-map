<template>
  <div class="mouseActionContainer" :class="{ isDark: isDark }">
    <el-tooltip
      class="item"
      effect="dark"
      :content="
        useLeftKeySelectionRightKeyDrag
          ? $t('mouseAction.tip2')
          : $t('mouseAction.tip1')
      "
      placement="top"
    >
      <div
        class="btn iconfont"
        :class="[useLeftKeySelectionRightKeyDrag ? 'iconmouseR' : 'iconmouseL']"
        @click="toggleAction"
      ></div>
    </el-tooltip>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

/**
 * @Author: 王林
 * @Date: 2021-06-24 22:53:10
 * @Desc: 鼠标操作设置
 */
export default {
  name: 'MouseAction',
  props: {
    mindMap: {
      type: Object
    },
    isDark: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      useLeftKeySelectionRightKeyDrag: state =>
        state.localConfig.useLeftKeySelectionRightKeyDrag
    })
  },
  mounted() {
    this.addTouchEventListeners();
  },
  beforeDestroy() {
    this.removeTouchEventListeners();
  },
  methods: {
    ...mapMutations(['setLocalConfig']),

    addTouchEventListeners() {
      this.$el.addEventListener('touchstart', this.handleTouchStart);
      this.$el.addEventListener('touchmove', this.handleTouchMove);
      this.$el.addEventListener('touchend', this.handleTouchEnd);
    },
    removeTouchEventListeners() {
      this.$el.removeEventListener('touchstart', this.handleTouchStart);
      this.$el.removeEventListener('touchmove', this.handleTouchMove);
      this.$el.removeEventListener('touchend', this.handleTouchEnd);
    },
    handleTouchStart(e) {
      var mouseEvent = new MouseEvent('mousedown', {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      });
      this.$el.dispatchEvent(mouseEvent);
    },
    handleTouchMove(e) {
      var mouseEvent = new MouseEvent('mousemove', {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      });
      this.$el.dispatchEvent(mouseEvent);
    },
    handleTouchEnd(e) {
      var mouseEvent = new MouseEvent('mouseup', {});
      this.$el.dispatchEvent(mouseEvent);
    },

    toggleAction() {
      let val = !this.useLeftKeySelectionRightKeyDrag
      this.mindMap.updateConfig({
        useLeftKeySelectionRightKeyDrag: val
      })
      this.setLocalConfig({
        useLeftKeySelectionRightKeyDrag: val
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mouseActionContainer {
  display: flex;
  align-items: center;

  &.isDark{
    .btn {
      color: hsla(0,0%,100%,.6);
    }
  }

  .item {
    margin-right: 12px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .btn {
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
