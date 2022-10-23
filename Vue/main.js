import voH from "./header.js"
import voN from "./nav.js"
import voNew from "./newest.js"
import voP from "./popular.js"

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
    `
}