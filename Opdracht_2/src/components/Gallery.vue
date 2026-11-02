<script setup>
import project from '../assets/Picture/AboutUs_image.jpg'
</script>

<template>
    <section>
        <div class="featured-projects">

            <h5>FEATURED PROJECTS</h5>

            <div class="links">
                <a href="#">ALL</a>
                <a href="#">BUILDING</a>
                <a href="#">CONSULTING</a>
                <a href="#">INTERIOR</a>
                <a href="#">OFFICE</a>
            </div>

        </div>

        <!-- GALLERY -->
        <div class="container-fluid p-0">
            <div class="row g-0">

                <!-- 1 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Modern Building</h5>
                        <p>A beautiful modern building project.</p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

                <!-- 2 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Shreveport, Bossier City</h5>
                        <p>
                            This luxury resort and senior independent living facility
                            with a fitness center, pool, spa, sauna, hair salon,
                            classroom space and...
                        </p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

                <!-- 3 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Interior Design</h5>
                        <p>A beautiful interior design project.</p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

                <!-- 4 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Office Design</h5>
                        <p>A modern office project.</p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

                <!-- 5 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Building Project</h5>
                        <p>A high-quality construction project.</p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

                <!-- 6 -->
                <div class="col-md-4 project">
                    <img :src="project" class="w-100 project-img" alt="Project">

                    <div class="project-text">
                        <h5>Consulting Project</h5>
                        <p>Professional consulting and development.</p>
                        <a href="#">LEARN MORE →</a>
                    </div>
                </div>

            </div>

            <a href="#" class="top-button">↑ TOP</a>
        </div>
    </section>
</template>

<style scoped>

.featured-projects {
    text-align: center;
    background-color: #e1e1e2;
    padding-bottom: 10px;
}

.featured-projects h5 {
    font-size: 17px;
    font-weight: 600;
    padding-top: 100px;
    padding-bottom: 20px;
}

.links {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.links a {
    color: #555;
    text-decoration: none;
    font-size: 10px;
    font-weight: bold;
}

.links a:hover {
    color: #f5b900;
}

/* GALLERY */
.project {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.project-img {
    width: 100%;
    height: 292px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}


.project:hover .project-img {
    transform: scale(1.05);
}

.project-text {
    position: absolute;
    inset: 0;
    background: rgba(20, 35, 50, 0.9);
    color: white;

    padding: 105px 22px 20px;

    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

/* TEKST TONEN BIJ HOVER */
.project:hover .project-text {
    opacity: 1;
    visibility: visible;
}

.project-text h5 {
    font-size: 14px;
    font-weight: bold;
}

.project-text p {
    font-size: 11px;
    line-height: 1.7;
    margin-bottom: 10px;
}

.project-text a {
    color: #ffb900;
    font-size: 9px;
    font-weight: bold;
    text-decoration: none;
}

.top-button {
    position: fixed;
    right: 10px;
    bottom: 0;

    background: #ffb900;
    color: white;

    padding: 7px 14px;

    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
}

@media (max-width: 767.98px) {
    .featured-projects {
        padding: 0 1rem 1rem;
    }

    .featured-projects h5 {
        padding-top: 2.5rem;
    }

    .links {
        flex-wrap: wrap;
        gap: 0.75rem 1rem;
    }

    .project-img {
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .project-text {
        position: static;
        display: block;
        background: #142332;
        opacity: 1;
        visibility: visible;
        padding: 1rem;
    }

    .project-text p {
        margin-bottom: 0.75rem;
    }

    .project-text h5 {
        font-size: 1rem;
    }

    .project-text p {
        font-size: 0.875rem;
    }

    .project-text a {
        font-size: 0.75rem;
    }
}

@media (max-width: 575.98px) {
    .links a {
        font-size: 0.75rem;
    }

    .top-button {
        right: 0.5rem;
        bottom: 0.5rem;
    }
}

</style>