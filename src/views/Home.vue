<script setup lang="ts">
import logoImg from '@/assets/logo.png';
</script>

<template>
  <v-container>
    <div class="pt-5">
      <v-img class="mx-auto" :src="logoImg" width="300" height="300" />
      <h3 id="desc" class="text-h3 mt-10 mb-10 text-center">
        一些<a
          class="leafletjs-logo-link"
          target="_blank"
          href="https://leafletjs.com/"
        >
          <img
            alt="leafletjs"
            class="leafletjs-logo"
            src="@/assets/leaflet-logo.png"
          >
        </a>的demo。
      </h3>
      <p class="text-p text-center mt-90 mx-auto" style="max-width: 599px">
        <a
          target="_blank"
          href="https://openlayers.org"
          class="openlayers-link"
        >
          <img
            class="openlayers-logo"
            src="@/assets/openlayers.svg"
            alt=""
          >
          Openlayers
        </a>和<a
          target="_blank"
          href="https://leafletjs.com/"
        >
          Leafletjs
        </a>作为当下流行的地图开源JavaScript库，均具有高性能、功能丰富等特点。但Leafletjs在<a href="https://leafletjs.com/plugins.html" target="_blank">第三方库</a>的丰富度上略胜一筹（<span class="text-decoration-line-through">Openlayers 第三方库是真的少，而且不好扩展</span>），故VLeaflet将Leafletjs的插件进行统一整合（主要是第三方库的ts支持）。
      </p>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.leafletjs-logo-link:hover{
  &:hover{
    cursor: pointer;
  }
}

.leafletjs-logo{
  display: inline-block;
  height: 3rem ;
  vertical-align: bottom;
  aspect-ratio: 6/1.69;
}

.openlayers-link{
  &:hover{
    color: #00AAFF;
  }
}

.openlayers-logo{
  height: 1rem;
  vertical-align: middle;
}
</style>