<template>
  <nav class="top-bar">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight"
            aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#FFFFFF" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
    <a class="navbar-brand btn" href="#">
        <span style="color: #FFFFFF;">
        {{ title }}
        </span>
    </a>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarLight"
         aria-labelledby="offcanvasNavbarLightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">멜로톡</h5>
        <button type="button" class="btn-close" style="background-color: var(--offcanvas-close-button-background-color);" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <svg class="offcanvas-icon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M226.666-186.666h140.001V-400q0-14.167 9.583-23.75t23.75-9.583h160q14.167 0 23.75 9.583t9.583 23.75v213.334h140.001v-380.001L480-756.667l-253.334 190v380.001Zm-66.666 0v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q17.453-13.333 39.893-13.333T520-810l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H560q-14.167 0-23.75-9.583-9.583-9.584-9.583-23.75v-213.334h-93.334v213.334q0 14.166-9.583 23.75Q414.167-120 400-120H226.666q-27.5 0-47.083-19.583T160-186.666ZM480-472Z"/></svg>
              홈
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link">
              <svg class="offcanvas-icon" xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 -960 960 960" width="27"><path d="M352.666-246.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5Zm0-166.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5ZM226.666-80q-27 0-46.833-19.833T160-146.666v-666.668q0-27 19.833-46.833T226.666-880h319.668q13.63 0 25.981 5.333 12.352 5.334 21.352 14.334l186.666 186.666q9 9 14.334 21.352Q800-639.964 800-626.334v479.668q0 27-19.833 46.833T733.334-80H226.666Zm314.001-576v-157.334H226.666v666.668h506.668v-476.001H574q-14.166 0-23.749-9.584-9.584-9.583-9.584-23.749ZM226.666-813.334v190.667-190.667 666.668-666.668Z"/></svg>
              소개
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="chat" class="nav-link">
              <svg class="offcanvas-icon" xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 -960 960 960" width="27"><path d="M240-240 136.666-136.666Q121-121 100.5-129.604 80-138.208 80-160.333v-653.001q0-27 19.833-46.833T146.666-880h666.668q27 0 46.833 19.833T880-813.334v506.668q0 27-19.833 46.833T813.334-240H240Zm-28.667-66.666h602.001v-506.668H146.666v575.002l64.667-68.334Zm-64.667 0v-506.668 506.668Z"/></svg>
              채팅
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
[data-theme="light"] {
  --offcanvas-icon-color: #000000;
  --offcanvas-text-color: #000000;
  --offcanvas-background-color: #FFFFFF;
  --offcanvas-close-button-background-color: #FFFFFF;
}

[data-theme="dark"] {
  --offcanvas-icon-color: #FFFFFF;
  --offcanvas-text-color: #FFFFFF;
  --offcanvas-background-color: #343a40;
  --offcanvas-close-button-background-color: #adb5bd;
}

.top-bar {
  padding: 0.2rem;
  background: #748ffc;
}

.navbar-brand {
  font-family: NanumSquareNeo-Variable;
  font-size: 1.6rem;
}

.offcanvas {
  background-color: var(--offcanvas-background-color);
}

.offcanvas-title {
  font-family: NanumSquareNeo-Variable;
  font-weight: bold;
  color: #748ffc;
}

.offcanvas-icon {
  margin-right: 0.5rem;
  fill: var(--offcanvas-icon-color);
}

.nav-item {
  font-family: SUIT-Regular;
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--offcanvas-text-color);
}
</style>