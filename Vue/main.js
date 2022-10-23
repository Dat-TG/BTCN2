import voH from "./header.js"
import voN from "./nav.js"
import voNew from "./newest.js"
import voP from "./popular.js"
import voT from "./topRating.js"
import voD from "./detailMovie.js"
import voF from "./footer.js"
window.addEventListener('popstate', function(e) {
    console.log("back");
    window.location.href="./default.html";
},false);

export default {
    data() {
        return {
            IsHide: false,
            mv: null,
        }
    },
    components: {
        voH,
        voN,
        voNew,
        voP,
        voT,
        voD,
        voF,
    },
    methods: {
        loadDetailMovie(obj) {
            this.mv=obj;
            this.IsHide=true;
            history.pushState(null, "", "/"+obj.title.toString());
        }
    },
    beforeCreate() {
    },
    mounted() {
        window.history.pushState(null, "", "./default.html");
        $('#main').fadeOut();
        $("#main").delay(3000).fadeIn('slow');
        $('#preloader').delay(3000).fadeOut('slow');
    },
    template: `
    <div class='loadercontainer' id="preloader">
        <div class='loader'>
            <div class='loader--dot'></div>
            <div class='loader--dot'></div>
            <div class='loader--dot'></div>
            <div class='loader--dot'></div>
            <div class='loader--dot'></div>
            <div class='loader--dot'></div>
            <div class='loader--text'></div>
        </div>
    </div>
    <div id="main">
        <div class="row">
            <div class="col-12">
                <voH/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voN/>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <voD :isHide='IsHide' :movie='mv'/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voNew :isHide='IsHide' @movieClick="(obj)=>loadDetailMovie(obj)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voP :isHide='IsHide' @movieClick="(obj)=>loadDetailMovie(obj)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voT :isHide='IsHide' @movieClick="(obj)=>loadDetailMovie(obj)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voF/>
            </div>
        </div>
    </div>
    `
}