import Movie from "./movie.js"

export default {
    data() {
        return {
            movies: [],
            list3movies: [],
        }
    },
    methods: {
        async load(src) {
            console.log("info",src);
            src=src.replace(" ","%20");
            const res=await fetch("https://imdb-api.com/en/API/SearchMovie/k_wasv29hw/"+src.toString());
            const rs=await res.json();
            var arr=[];
            $.each(rs.results, function(i, v) {
                arr.push(v);
            })
            this.movies=arr.map(obj=>new Movie(obj));
            for (let i=0;i<arr.length/3;i++) {
                this.list3movies.push(this.movies.splice(0, 3));
            }
            console.log(this.movies, arr);
        },
        movieClick(obj) {
            this.$emit("movieClick", obj);
            console.log("click",obj);
        }
    },
    props:['isShowSearch','searchInfo'],
    watch: {
        'searchInfo': function() {
            this.load(this.searchInfo);
        }
    },
    mounted() {
    },
    template:
    `
    <template v-if="isShowSearch" v-for="m in list3movies">
        <div class="row">
            <template v-for="mm in m">
            <div class="col-4">
                <div class="card ms-auto me-auto" style="width: 18rem;" @click="movieClick(mm)">
                    <img :src="mm.image" class="card-img-top" :alt="mm.title">
                    <div class="card-body">
                        <p class="text-center fw-bold">{{mm.title}}</p>
                        <p class="text-center">({{mm.description}})</p>
                    </div>
                </div>
            </div>
            </template>
        </div>
    </template>

    `
}