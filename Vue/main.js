import voH from "./header.js"
import voN from "./nav.js"
import voNew from "./newest.js"
import voP from "./popular.js"
import voT from "./topRating.js"

export default {
    data() {
        return {
            
        }
    },
    components: {
        voH,
        voN,
        voNew,
        voP,
        voT,
    },
    template: `
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
        <div class="col-12">
            <voNew/>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <voP/>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <voT/>
        </div>
    </div>
    `
}