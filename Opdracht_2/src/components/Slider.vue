<script setup>
import picture_1 from '../assets/Picture/Picture_1.png'
</script>

<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="picture_1" alt="Bouwproject" />
        <div class="carousel-caption slide_1">
          <p class="tekst_A">HIGH QUALITY GARANTIED</p>
          <h2 class="titel_A">Contructing</h2>
          <h2 class="titel_A">Is Our Life Buisness</h2>
          <div class="knop">
            <button class="BTN_YELLOW">OUR SERVICES &gt;</button>
            <button class="BTN_BLACK">ABOUT US</button>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img :src="picture_1" alt="Bouwproject" />
        <div class="carousel-caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
      aria-label="Vorige afbeelding"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
      aria-label="Volgende afbeelding"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-item img {
  display: block;
  width: 100%;
  min-height: 300px;
  max-height: 720px;
  object-fit: cover;
}

.carousel-control-next,
.carousel-control-prev {
  width: 40px;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: grey;
}

.carousel-caption {
  top: 50%;
  right: auto;
  bottom: auto;
  left: clamp(2.5rem, 11vw, 200px);
  width: min(70%, 700px);
  padding: 0;
  transform: translateY(-50%);
  color: black;
  text-align: left;
}

.slide_1 .titel_A {
  margin: 0 0 0.15em;
  font-size: clamp(1.75rem, 4vw, 3.4375rem);
  line-height: 1.05;
}

.tekst_A {
  margin: 0 0 0.75rem;
  font-size: clamp(0.7rem, 1.1vw, 0.875rem);
  font-weight: bold;
}

.knop {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.BTN_YELLOW,
.BTN_BLACK {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border: none;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.BTN_YELLOW {
  background: #ffc107;
}

.BTN_YELLOW:hover {
  background: #fff;
  color: #222;
}

.BTN_BLACK {
  background: #1f1e1e;
}

.BTN_BLACK:hover {
  background: #fff;
  color: #222;
}

.BTN_YELLOW:focus-visible,
.BTN_BLACK:focus-visible {
  outline: 3px solid #222;
  outline-offset: 3px;
}

@media (max-width: 767.98px) {
  .carousel-item img {
    min-height: 280px;
  }

  .carousel-caption {
    left: 2.5rem;
    width: calc(100% - 5rem);
  }

  .slide_1 .titel_A {
    font-size: clamp(1.25rem, 5vw, 2rem);
  }

  .tekst_A {
    margin-bottom: 0.4rem;
    font-size: 0.65rem;
  }

  .knop {
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  .BTN_YELLOW,
  .BTN_BLACK {
    padding: 0.65rem 0.8rem;
    font-size: 0.6rem;
  }

  .carousel-caption h5 {
    font-size: 1rem;
  }

  .carousel-caption p {
    font-size: 0.75rem;
  }
}
</style>
