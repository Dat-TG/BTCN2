export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    props: ['isHide', 'movie'],
    template:
    `
    <template v-if="isHide" id="detailMovie">
        <img :src="movie.image" :alt="movie.title">
        <br>
        <div class="container">
            <p class="text-start">
                <template v-if="movie.title!=null"><b>Title</b>: {{movie.title}} <br></template>
                <template v-if="movie.year!=null"> <b>Year</b>: {{movie.year}} <br></template>
                <template v-if="movie.crew!=null"> <b>Crew</b>: {{movie.crew}} <br></template>
                <template v-if="movie.directors!=null"> <b>Directors</b>: {{movie.directors}} <br></template>
                <template v-if="movie.plot!=null"> <b>Plot</b>: {{movie.plot}} <br></template>
                <template v-if="movie.stars!=null"> <b>Stars</b>: {{movie.stars}} <br></template>
                <template v-if="movie.genres!=null"> <b>Genres</b>: {{movie.genres}}</template>
            </p>
        </div>
    </template>
    `
}