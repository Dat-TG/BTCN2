import Movie from "./movie.js"


export default {
    data() {
        return {
            movies: [],
            firstThreeMovies: [],
            trippleMovies: [],
        }
    },
    methods: {
        async load() {
            const res=await fetch("json/250movies.json");
            const rs=await res.json();
            var arr=[];
            var len=0;
            $.each(rs.items, function(i, v) {
                arr.push(v);
                len++;
                if (len==30) {
                    return false;
                }
            })
            this.movies=arr.map(obj=>new Movie(obj));
            this.firstThreeMovies.push(this.movies.splice(0,3));
            for (let i=0;i<9;i++) {
                this.trippleMovies.push(this.movies.splice(0, 3));
            }
            this.movies=arr.map(obj=>new Movie(obj));
            console.log(this.trippleMovies, this.firstThreeMovies);
        },
        movieClick(obj) {
            this.$emit("movieClick", obj);
            console.log("click",obj);
        }
    },
    props:['isHide'],
    mounted() {
        this.load();
    },
    template:
    `
    <template v-if="!isHide">
    <h2 class="text-start">
        Top Rating
    </h2>
    <div id="topRatingSlide" class="carousel slide" data-bs-ride="carousel">
    <div class="container position-relative">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#topRatingSlide" data-bs-slide-to="9" aria-label="Slide 10"></button>
    </div>
    </div>
    <div class="carousel-inner" role="listbox">
    <template  v-for="m in firstThreeMovies">
        <div class="carousel-item active">
            <div class="row">
                <template v-for="mm in m"> 
                    <div class="col-4">
                        <img :src="mm.image" class="d-block" :alt="mm.title" @click="movieClick(mm)">
                    </div>
                </template>
            </div>
        </div>
    </template>
        <template  v-for="m in trippleMovies">
            <div class="carousel-item">
                <div class="row">
                    <template v-for="mm in m"> 
                        <div class="col-4">
                            <img :src="mm.image" class="d-block" :alt="mm.title" @click="movieClick(mm)">
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#topRatingSlide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#topRatingSlide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
    </div>
    </template>

    `
}