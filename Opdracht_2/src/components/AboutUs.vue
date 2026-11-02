<script setup>
import AboutUs_image from '../assets/Picture/AboutUs_image.jpg'
</script>
<template>
    <section>
        <div class="Request_balk">
            <h1 class="titel">We Are BuildWall</h1>
            <p class="tekst_1">We have been transforming the ideas and visions into award-winning projects.</p>
            <button class="btn_yellow">REQUIST A QUOTE</button>
        </div>

        <div class="card_map">
            <div class="card col-3">
                <img :src="AboutUs_image" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Construction</h5>
                    <p class="card-text">
                        We specialize in all kinds of construction works. Our certified team provides the services in
                        time and on the highest level.
                    </p>
                    <a href="#" class="btn btn-primary btn_card">LEARN MORE  ></a>
                </div>
            </div>
            <div class="card col-3">
                <img :src="AboutUs_image" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">ABOUT US</h5>
                    <p class="card-text">
                        BuildWall is completely client-oriented company. We are able meet schedule deadlines with top
                        quality.
                    </p>
                    <a href="#" class="btn btn-primary  btn_card">LEARN MORE  ></a>
                </div>
            </div>
            <div class="card col-3">
                <img :src="AboutUs_image" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">EFFECTIVE TEAMWORK</h5>
                    <p class="card-text">We have a very good team-based and teamwork attitude, working together to find
                        the best solutions.
                    </p>
                    <a href="#" class="btn btn-primary btn_card">LEARN MORE  ></a>
                </div>
            </div>
        </div>


    </section>
</template>

<style scoped>
div.Request_balk {
    display: flex;
    align-items: center;
}

.titel {
    color: #ffc107;
    padding-left: 160px;
    padding-top: 35px;
    padding-bottom: 35px;
    font-size: 35px;
}

.tekst_1 {
    font-weight: bold;
    padding-left: 40px;
    padding-top: 10px;
    font-size: 15px;
    padding-right: 100px;
}

.btn_yellow {
    background-color: #ffb526;
    color: white;
    border: none;
    padding: 10px 40px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 25px;
    transition: 0.3s ease;
}

.btn_card {
    background-color: #ffb526;
    color: white;
    border: none;
    padding: 12px 35px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 0;
    font-size: 15px;
}

.btn_card:hover,
.btn_yellow:hover {
    background-color: black;
    color: white;
}



div.card_map {
    display: flex;
    justify-content: center;
    background-color: rgb(248, 248, 248);
}

.card {
    margin-bottom:60px;
    margin-top:80px;
    border-radius: 0%;
    margin-left: 15px;
    margin-right: 15px;
}

.card-title{
    font-family: Arial, sans-serif; 
    font-weight: 700;
    padding-bottom: 30px;
    padding-top: 10px;
    font-size: 28px;
}
.card-text{
    color:grey;
    padding-bottom: 10px;
}

@media (max-width: 991.98px) {
    div.Request_balk {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem 1rem;
        padding: 1.5rem;
    }

    .titel {
        padding: 0;
        font-size: clamp(1.75rem, 4vw, 2.1875rem);
    }

    .tekst_1 {
        flex: 1 1 280px;
        padding: 0;
    }

    .card_map {
        flex-wrap: wrap;
        padding: 1rem;
    }

    .card_map .card {
        flex: 0 1 calc(50% - 30px);
        width: calc(50% - 30px);
        margin: 1rem 15px;
    }
}

@media (max-width: 575.98px) {
    div.Request_balk {
        align-items: stretch;
        flex-direction: column;
        padding: 1.25rem 1rem;
    }

    .tekst_1 {
        flex: auto;
    }

    .btn_yellow {
        width: 100%;
        justify-content: center;
        padding: 0.75rem 1rem;
    }

    .card_map .card {
        flex-basis: 100%;
        width: 100%;
        margin: 0.75rem 0;
    }
}

</style>