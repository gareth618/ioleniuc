<template>
  <div class="relative mt-16 aspect-square h-20 max-lg:hidden">
    <div class="absolute opacity-0" style="animation: io-scrolling 4s linear infinite" :style="{ 'animation-delay': index === 1 ? '2s' : '0s' }" v-for="index in 2">
      <div class="absolute origin-bottom" :class="index === 1 ? 'bg-green-300' : 'bg-green-400'" style="width: 0.4rem; height: 3rem; transform: rotate(+45deg) translateX(-0.2rem)" />
      <div class="absolute origin-bottom" :class="index === 1 ? 'bg-green-300' : 'bg-green-400'" style="width: 0.4rem; height: 3rem; transform: rotate(-45deg) translateX(+0.2rem)" />
    </div>
  </div>
</template>

<style>
@keyframes io-scrolling {
  0% {
    opacity: 0;
    translate: 2.3rem -1.25rem;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    translate: 2.3rem +1.25rem;
  }
}
</style>
