<template>
  <header class="if-desktop py-3 shadow-sm rounded-2">
    <div
        class="container-fluid d-grid align-items-center"
        style="grid-template-columns: 3fr 1fr"
    >
      <div>
        <button
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDesktopLight"
            aria-controls="offcanvasNavbarLight"
            aria-label="Toggle navigation"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              class="navbar-toggle-icon bi bi-list"
              viewBox="0 0 16 16"
          >
            <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <a class="navbar-brand btn" href="#">
          <span>
            {{ title }}
          </span>
        </a>
      </div>

      <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbarDesktopLight"
          aria-labelledby="offcanvasNavbarLightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">멜로톡</h5>
          <button
              type="button"
              class="btn-close"
              style="
              background-color: var(--offcanvas-close-button-background-color);
            "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                >
                  <path
                      d="M226.666-186.666h140.001V-400q0-14.167 9.583-23.75t23.75-9.583h160q14.167 0 23.75 9.583t9.583 23.75v213.334h140.001v-380.001L480-756.667l-253.334 190v380.001Zm-66.666 0v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q17.453-13.333 39.893-13.333T520-810l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H560q-14.167 0-23.75-9.583-9.583-9.584-9.583-23.75v-213.334h-93.334v213.334q0 14.166-9.583 23.75Q414.167-120 400-120H226.666q-27.5 0-47.083-19.583T160-186.666ZM480-472Z"
                  />
                </svg>
                홈
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="about" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                >
                  <path
                      d="M352.666-246.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5Zm0-166.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5ZM226.666-80q-27 0-46.833-19.833T160-146.666v-666.668q0-27 19.833-46.833T226.666-880h319.668q13.63 0 25.981 5.333 12.352 5.334 21.352 14.334l186.666 186.666q9 9 14.334 21.352Q800-639.964 800-626.334v479.668q0 27-19.833 46.833T733.334-80H226.666Zm314.001-576v-157.334H226.666v666.668h506.668v-476.001H574q-14.166 0-23.749-9.584-9.584-9.583-9.584-23.749ZM226.666-813.334v190.667-190.667 666.668-666.668Z"
                  />
                </svg>
                소개
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="chat" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                >
                  <path
                      d="M240-240 136.666-136.666Q121-121 100.5-129.604 80-138.208 80-160.333v-653.001q0-27 19.833-46.833T146.666-880h666.668q27 0 46.833 19.833T880-813.334v506.668q0 27-19.833 46.833T813.334-240H240Zm-28.667-66.666h602.001v-506.668H146.666v575.002l64.667-68.334Zm-64.667 0v-506.668 506.668Z"
                  />
                </svg>
                채팅
              </router-link>
            </li>
          </ul>
          <p class="theme-toggle rounded-3">
            <button class="btn" @click="onToggleDarkMode">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  class="theme-toggle-icon bi bi-sun"
                  viewBox="0 0 16 16"
              >
                <path
                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </button>
          </p>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="w-100">
          <form role="search">
            <input
                type="search"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
                style="background-color: var(--navbar-search-area-color);"
            />
          </form>
        </div>

        <div class="flex-shrink-0 dropdown">
          <a
              href="#"
              class="d-block link-body-emphasis text-decoration-none dropdown-toggle btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
            <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider"/>
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <nav class="navbar if-mobile" aria-label="Light offcanvas navbar">
    <div class="container-fluid">
      <a class="navbar-brand btn" href="#">{{ title }}</a>
      <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbarLight"
          aria-controls="offcanvasNavbarLight"
          aria-label="Toggle navigation"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            class="navbar-toggle-icon bi bi-list"
            viewBox="0 0 16 16"
        >
          <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbarLight"
          aria-labelledby="offcanvasNavbarLightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">
            멜로톡
          </h5>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style="background-color: var(--offcanvas-close-button-background-color);"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="30"
                >
                  <path
                      d="M226.666-186.666h140.001V-400q0-14.167 9.583-23.75t23.75-9.583h160q14.167 0 23.75 9.583t9.583 23.75v213.334h140.001v-380.001L480-756.667l-253.334 190v380.001Zm-66.666 0v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q17.453-13.333 39.893-13.333T520-810l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H560q-14.167 0-23.75-9.583-9.583-9.584-9.583-23.75v-213.334h-93.334v213.334q0 14.166-9.583 23.75Q414.167-120 400-120H226.666q-27.5 0-47.083-19.583T160-186.666ZM480-472Z"
                  />
                </svg>
                <span class="nav-item">홈</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="about" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                >
                  <path
                      d="M352.666-246.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5Zm0-166.667h254.668q14.166 0 23.749-9.617 9.584-9.617 9.584-23.833 0-14.216-9.584-23.716-9.583-9.5-23.749-9.5H352.666q-14.166 0-23.749 9.617-9.584 9.617-9.584 23.833 0 14.216 9.584 23.716 9.583 9.5 23.749 9.5ZM226.666-80q-27 0-46.833-19.833T160-146.666v-666.668q0-27 19.833-46.833T226.666-880h319.668q13.63 0 25.981 5.333 12.352 5.334 21.352 14.334l186.666 186.666q9 9 14.334 21.352Q800-639.964 800-626.334v479.668q0 27-19.833 46.833T733.334-80H226.666Zm314.001-576v-157.334H226.666v666.668h506.668v-476.001H574q-14.166 0-23.749-9.584-9.584-9.583-9.584-23.749ZM226.666-813.334v190.667-190.667 666.668-666.668Z"
                  />
                </svg>
                <span class="nav-item">소개</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="chat" class="nav-link">
                <svg
                    class="offcanvas-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                >
                  <path
                      d="M240-240 136.666-136.666Q121-121 100.5-129.604 80-138.208 80-160.333v-653.001q0-27 19.833-46.833T146.666-880h666.668q27 0 46.833 19.833T880-813.334v506.668q0 27-19.833 46.833T813.334-240H240Zm-28.667-66.666h602.001v-506.668H146.666v575.002l64.667-68.334Zm-64.667 0v-506.668 506.668Z"
                  />
                </svg>
                <span class="nav-item">채팅</span>
              </router-link>
            </li>
          </ul>
          <p class="theme-toggle rounded-3">
            <button class="btn" @click="onToggleDarkMode">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  class="theme-toggle-icon bi bi-sun"
                  viewBox="0 0 16 16"
              >
                <path
                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: String,
  },
  mounted() {
    if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.add("lightmode");
    }
  },
  methods: {
    onToggleDarkMode() {
      if (window) {
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          if (document.documentElement.classList.contains('darkmode')) {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
          } else {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
          }
        } else {
          if (document.documentElement.classList.contains('lightmode')) {
            document.documentElement.classList.remove("lightmode");
            document.documentElement.classList.add("darkmode");
          } else {
            document.documentElement.classList.remove("darkmode");
            document.documentElement.classList.add("lightmode");
          }
        }

      }
    },
  }
}
</script>

<style>
:root.lightmode {
  --offcanvas-icon-color: #000000;
  --offcanvas-text-color: #000000;
  --offcanvas-background-color: #ffffff;
  --offcanvas-close-button-background-color: #ffffff;
  --offcanvas-title-color: #364fc7;
  --theme-toggle-icon-color: #000000;
  --navbar-title-color: #000000;
  --navbar-toggle-icon-color: #000000;
  --navbar-search-area-color: #FFFFFF;
  --navbar-background-color: #FFFFFF;
}

:root.darkmode {
  --offcanvas-icon-color: #ffffff;
  --offcanvas-text-color: #ffffff;
  --offcanvas-background-color: #343a40;
  --offcanvas-close-button-background-color: #adb5bd;
  --offcanvas-title-color: #FFFFFF;
  --theme-toggle-icon-color: #ffffff;
  --navbar-title-color: #FFFFFF;
  --navbar-toggle-icon-color: #FFFFFF;
  --navbar-search-area-color: #adb5bd;
  --navbar-background-color: #495057;
}

header {
  margin: 1rem;
  background-color: var(--navbar-background-color);
}

.navbar-brand {
  font-family: NanumSquareNeo-Variable;
  font-size: 1.6rem;
  color: var(--navbar-title-color);
}

.offcanvas {
  background-color: var(--offcanvas-background-color);
}

.offcanvas-title {
  font-family: NanumSquareNeo-Variable;
  font-weight: bold;
  color: var(--offcanvas-title-color);
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

.theme-toggle {
  margin-top: 2rem;
}

.theme-toggle-icon {
  fill: var(--theme-toggle-icon-color);
}

.navbar-toggle-icon {
  fill: var(--navbar-toggle-icon-color);
}
</style>