import Movie from "./movie.js"

export default {
    data() {
        return {
            movies: [],
            fisrtMovie: [],
        }
    },
    methods: {
        async load() {
            const res=await fetch("json/InTheaters.json");
            const rs=await res.json();
            var arr=[];
            var len=0;
            $.each(rs.items, function(i, v) {
                arr.push(v);
                len++;
                if (len==5) {
                    return false;
                }
            })
            this.movies=arr.map(obj=>new Movie(obj));
            this.firstMovie=this.movies.splice(0,1);
            console.log(this.movies, arr);
        }
    },
    mounted() {
        this.load();
    },
    template:
    `
    <div id="newestSlide" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#newestSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#newestSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#newestSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#newestSlide" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#newestSlide" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active" v-for="m in firstMovie" >
        <img :src="m.image" class="d-block" :alt="m.title">
        <div class="carousel-caption d-none d-md-block">
            <h5>{{m.fullTitle}}</h5>
        </div>
        </div>
        <div class="carousel-item" v-for="m in movies" >
        <img :src="m.image" class="d-block" :alt="m.title">
        <div class="carousel-caption d-none d-md-block">
            <h5>{{m.fullTitle}}</h5>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#newestSlide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#newestSlide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
    </div>

    `
}