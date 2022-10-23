import voH from "./header.js"
import voN from "./nav.js"
import voNew from "./newest.js"
import voP from "./popular.js"
import voT from "./topRating.js"
import voD from "./detailMovie.js"
import voF from "./footer.js"
import voS from "./searchMovie.js"
window.addEventListener('popstate', function(e) {
    console.log("back");
    window.location.href="./default.html";
},false);

export default {
    data() {
        return {
            IsHide: false,
            IsView: false,
            mv: null,
            searchStr: "",
            isViewSearch: false,
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
        voS,
    },
    methods: {
        loadDetailMovie(obj) {
            this.mv=obj;
            this.IsHide=true;
            this.IsView=true;
            history.pushState(null, "", "/movie?title="+obj.title.toString());
        },
        handleSearch(src) {
            this.searchStr=src;
            console.log("searchStr",this.searchStr);
            this.IsHide=true;
            this.isViewSearch=true;
            history.pushState(null, "", "/movie?search?title="+obj.title.toString());
        }
    },
    beforeCreate() {
    },
    mounted() {
        window.history.pushState(null, "", "");
        $('#main').fadeOut();
        $("#main").delay(2000).fadeIn('slow');
        $('#preloader').delay(2000).fadeOut('slow');
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
                <voN @search="(src)=>handleSearch(src)"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <voS :searchInfo='searchStr' :isShowSearch='isViewSearch'/>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <voD :isHide='IsView' :movie='mv'/>
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