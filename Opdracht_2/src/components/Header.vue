<script setup>
import logo from '../assets/Picture/logo.png'
</script>

<template>
  <header>
    <div class="header-top">
      <a href="/">
        <img :src="logo" alt="BuildIcon" class="logo" />
      </a>

      <div class="header-info">
        <div class="info support">
          <span class="icon">▯</span>
          <div>
            <p>CUSTOM SUPPORT & SALE</p>
            <strong>+7-495-1234567</strong>
          </div>
        </div>

        <div class="info working">
          <span class="icon">◷</span>
          <div>
            <p>WORKING TIME</p>
            <strong>MON–SAT: 08:00–18:00</strong>
          </div>
        </div>

        <a href="/contact" class="quote">
          <span>✉</span> REQUEST A QUOTE
        </a>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">VOORBEELD</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
        <li>
          <a href="#">NEWS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/search" class="search" aria-label="Zoeken">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <circle cx="10" cy="10" r="7" />
              <path d="m15 15 6 6" />
            </svg>
          </a>
        </li>
      </ul>


    </nav>
  </header>
</template>

<style scoped>
header {
  background: white;
  color: #252c35;
  font-family: Arial, sans-serif;
  width: calc(100% - 30px);
  max-width: 1150px;
  margin: auto;
  position: relative;
  z-index: 9000;
  margin-bottom: -2em;
}

a {
  text-decoration: none;
}


.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-top {
  height: 100px;
}

.logo {
  display: block;
  width: 225px;
  height: 64px;
  object-fit: contain;
}

.header-info,
.info {
  display: flex;
  align-items: center;
  gap: 32px;
}

.info {
  gap: 20px;
}

.support {
  height: 64px;
  padding-right: 50px;
  border-right: 1px solid #e2e5e8;
}

.icon {
  color: #ffb624;
  font-size: 40px;
}

.info p {
  margin: 0 0 5px;
  color: #6b7280;
  font-size: 14.3px;
}

.info strong {
  font-size: 14px;
}

.quote {
  width: 277px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  background: #222931;
  color: white;
  font-weight: bold;
}

.quote span {
  color: #ffb624;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffb624;
}

nav ul {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
}

nav li {
  list-style: none;
}

nav li a {
  padding: 15px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

nav li a:hover {
  background: #222931;
}

.search {
  width: 90px;
  display: flex;
  justify-content: center;
}

.search svg {
  fill: none;
  stroke: white;
  stroke-width: 3;
}

@media (max-width: 1250px) {
  .support {
    display: none;
  }

  .header-info {
    gap: 20px;
  }

  .quote {
    width: 220px;
  }
}

@media (max-width: 900px) {
  .working {
    display: none;
  }

  .search {
    width: 50px;
  }
}

@media (max-width: 650px) {
  .header-top {
    height: 90px;
  }

  .logo {
    width: 180px;
  }

  .quote {
    display: none;
  }

  nav {
    height: 60px;
    align-items: center;
  }

  nav ul {
    align-items: stretch;
  }

  nav li {
    display: flex;
  }

  nav li a {
    display: flex;
    align-items: center;
  }
}
</style>