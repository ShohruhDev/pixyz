<template>
  <div :class="['development', { open: isActive }]">
    <div class="development-header" @click="openContent">
      <h6>{{ title }}</h6>
      <div class="development-header__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.001"
          height="15.622"
          viewBox="0 0 27.001 15.622"
        >
          <g
            id="Group_1048"
            data-name="Group 1048"
            transform="translate(-1480.379 -2194.379)"
          >
            <line
              id="Line_10"
              data-name="Line 10"
              x2="11.379"
              y2="11.379"
              transform="translate(1482.5 2196.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="3"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="11.379"
              y2="11.379"
              transform="translate(1493.879 2196.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="3"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    openContent() {
      this.isActive = !this.isActive;
      // const svg = document.getElementsByTagName('svg')
      // document.svg.classList.add('icon-active')
    },
  },
};
</script>

<style lang="scss" scoped>
.development {
  margin-bottom: 20px;
  max-height: 62px;
  overflow: hidden;
  transition: 0.3s;

  &.open {
    max-height: 2500px;

    .development-header__icon {
      transform: rotate(180deg);
    }
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px;
    background: #00a49a;
    border-radius: 15px;
    margin-bottom: 8px;
    cursor: pointer;

    h6 {
      font-family: "Seg-bold";
      font-size: 24px;
      line-height: 32px;
      color: #ffffff;
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      transition: 0.2s;

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .content-wrapper {
    padding: 32px 15px;
  }
}
</style>
