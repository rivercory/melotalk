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
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <img src="../assets/icons/home_FILL0_wght400_GRAD0_opsz40.svg" width="30" height="30" alt="home icon"/>
              홈
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link">
              <img src="../assets/icons/description_FILL0_wght400_GRAD0_opsz40.svg" width="27" height="27" alt="description icon"/>
              소개
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="chat" class="nav-link">
              <img src="../assets/icons/chat_bubble_FILL0_wght400_GRAD0_opsz40.svg" width="27" height="27"  alt="chat icon"/>
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
.top-bar {
  padding: 0.2rem;
  background: #748ffc;
}

.navbar-brand {
  font-family: NanumSquareNeo-Variable;
  font-size: 1.6rem;
}

.offcanvas-title {
  font-family: LINESeedKR-Bd;
}

.nav-item {
  font-family: SUIT-Regular;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>