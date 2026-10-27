<script setup>
import picture_1 from '../assets/Picture/Picture_1.png'

</script>


<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" :src="picture_1" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <P>HIGH QUALITY GARANTIED</P>
                    <H2> Contructing </H2>
                    <h2>Is Our Life Buisness</h2>
                </div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" :src="picture_1" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev" aria-label="Vorige afbeelding">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next" aria-label="Volgende afbeelding">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>



    </div>
</template>



<style scoped>
.carousel-control-next,
.carousel-control-prev {
    width: 30px;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    background-color: grey;
}
.carousel-caption {
    left: 5%;
    right: 50%;
    top: 40%;
    color: black;
    text-align:left ;
}
</style>