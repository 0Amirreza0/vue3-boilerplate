<template>
  <div class="notification" :class="positionClasses">
    <slot>
      <toast-notification :message="message" />
    </slot>
  </div>
</template>

<script setup>
import BaseIcon from '@/components/general/base-icon/base-icon.vue';
import ToastNotification from '@/components/general/notification/toast-notification.vue';
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    validation: (position) => {
      return [
        'top',
        'bottom',
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-right',
        'bottom-left',
      ].includes(position);
    },
    default: 'bottom',
  },
});

const positionClasses = computed(() => {
  const positionList = props.position.split('-');

  return positionList.reduce((classList, position) => {
    classList.push(`notification_${position}`);
    return classList;
  }, []);
});
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;

  &_top {
    top: 0;
  }

  &_bottom {
    bottom: 0;
  }

  &_left {
    left: 0;
  }

  &_right {
    right: 0;
  }

  &_center {
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
