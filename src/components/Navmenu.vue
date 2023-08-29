<template>
  <nav class="navbar rounded-3" aria-label="Light offcanvas navbar">
      <a class="navbar-brand" href="#">
        <span style="color: #FFFFFF;">
        {{ title }}
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">멜로톡</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link">홈</router-link>
            </li>
            <li class="nav-item">
              <router-link to="about" class="nav-link">소개</router-link>
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
.navbar {
  padding: 0.5rem;
  margin: 1rem;
  background: #748ffc;
}

.navbar-brand {
  font-family: NanumSquareNeo-Variable;
  font-size: 1.4rem;
  margin-left: 0.5rem;
}

.navbar-toggler {
  border: 0;
}

.offcanvas-title {
  font-family: LINESeedKR-Bd;
}
</style>