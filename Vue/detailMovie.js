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
        <br>
        <div class="container ms-auto me-auto">
            <p class="text-start border border-primary border-5 rounded p-3" id="info">
                <template v-if="movie.title!=null"><b>Title</b>: {{movie.title}} <br></template>
                <template v-if="movie.year!=null"> <b>Year</b>: {{movie.year}} <br></template>
                <template v-if="movie.crew!=null"> <b>Crew</b>: {{movie.crew}} <br></template>
                <template v-if="movie.directors!=null"> <b>Directors</b>: {{movie.directors}} <br></template>
                <template v-if="movie.plot!=null"> <b>Plot</b>: {{movie.plot}} <br></template>
                <template v-if="movie.stars!=null"> <b>Stars</b>: {{movie.stars}} <br></template>
                <template v-if="movie.genres!=null"> <b>Genres</b>: {{movie.genres}}<br></template>
                <template v-if="movie.runtimeMins!=null"> <b>Length</b>: {{movie.runtimeMins}}<br></template>
                <template v-if="movie.rank!=null"> <b>Rank</b>: {{movie.rank}}<br></template>
                <template v-if="movie.contentRating!=null"> <b>Content Rating</b>: {{movie.contentRating}}<br></template>
                <template v-if="movie.imDbRating!=null"> <b>imDb Rating</b>: {{movie.imDbRating}}<br></template>
                <template v-if="movie.description!=null"> <b>Description</b>: {{movie.description}}<br></template>
            </p>
        </div>
    </template>
    `
}