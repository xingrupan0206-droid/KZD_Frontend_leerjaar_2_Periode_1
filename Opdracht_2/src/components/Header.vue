<script setup>
import logo from '../assets/Picture/logo.png'
</script>

<template>
  <header class="site-header">
    <div class="header-top">
      <a href="/" aria-label="BuildIcon startpagina">
        <img :src="logo" alt="BuildIcon" class="logo" />
      </a>

      <div class="header-info">
        <div class="info support">
          <span class="icon" aria-hidden="true">▯</span>
          <div>
            <p>CUSTOM SUPPORT &amp; SALE</p>
            <strong>+7-495-1234567</strong>
          </div>
        </div>

        <div class="info working">
          <span class="icon" aria-hidden="true">◷</span>
          <div>
            <p>WORKING TIME</p>
            <strong>MON–SAT: 08:00–18:00</strong>
          </div>
        </div>

        <a href="/contact" class="quote">
          <span aria-hidden="true">✉</span> REQUEST A QUOTE
        </a>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark site-nav" aria-label="Hoofdnavigatie">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation"
        aria-controls="mainNavigation" aria-expanded="false" aria-label="Navigatie openen of sluiten">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNavigation" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
          <li class="nav-item"><a class="nav-link" href="#">VOORBEELD</a></li>
          <li class="nav-item"><a class="nav-link" href="#">SERVICES</a></li>
          <li class="nav-item"><a class="nav-link" href="#">PROJECTS</a></li>
          <li class="nav-item"><a class="nav-link" href="#">NEWS</a></li>
          <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
        </ul>

        <ul class="navbar-nav ms-lg-auto">
          <li class="nav-item">
            <a href="/search" class="nav-link search" aria-label="Zoeken">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10" cy="10" r="7" />
                <path d="m15 15 6 6" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 20;
  width: calc(100% - 30px);
  max-width: 1150px;
  margin: 0 auto -2em;
  background: white;
  color: #252c35;
  font-family: Arial, sans-serif;
}

.site-header a {
  text-decoration: none;
}

.header-top {
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.logo {
  display: block;
  width: 225px;
  max-width: 100%;
  height: 64px;
  object-fit: contain;
}

.header-info,
.info {
  display: flex;
  align-items: center;
}

.header-info {
  gap: clamp(1rem, 3vw, 2rem);
}

.info {
  gap: 12px;
}

.support {
  min-height: 64px;
  padding-right: clamp(1rem, 3vw, 50px);
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
  display: flex;
  min-height: 56px;
  width: 277px;
  flex: 0 1 277px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 1rem;
  background: #222931;
  color: white;
  font-weight: bold;
}

.quote span {
  color: #ffb624;
}

.site-nav {
  min-height: 50px;
  padding: 0;
  background: #ffb624;
}

.site-nav .nav-link {
  display: flex;
  min-height: 50px;
  align-items: center;
  padding: 0 15px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.site-nav .nav-link:hover,
.site-nav .nav-link:focus-visible {
  background: #222931;
  color: white;
}

.search {
  justify-content: center;
  min-width: 90px;
}

.search svg {
  fill: none;
  stroke: white;
  stroke-width: 3;
}

@media (max-width: 1199.98px) {
  .site-header {
    margin-bottom: 0;
  }

  .header-top {
    min-height: 0;
    flex-wrap: wrap;
    padding: 1rem 0;
  }

  .logo {
    width: 190px;
  }

  .header-info {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .quote {
    width: auto;
  }
}

@media (max-width: 991.98px) {
  .site-nav {
    padding: 0.25rem 0;
  }

  .site-nav .nav-link {
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 575.98px) {
  .site-header {
    width: calc(100% - 1rem);
  }

  .logo {
    width: 170px;
    height: 52px;
  }

  .header-info {
    gap: 0.75rem;
  }

  .support {
    min-height: 0;
    padding-right: 0;
    border-right: 0;
  }

  .icon {
    font-size: 30px;
  }

  .info p {
    font-size: 11px;
  }

  .info strong {
    font-size: 12px;
  }

  .quote {
    min-height: 44px;
    flex: 1 1 145px;
    padding: 0 0.75rem;
    font-size: 12px;
  }
}
</style>
