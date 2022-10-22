import voH from "./header.js"
import voN from "./nav.js"

export default {
    data() {
        return {
            
        }
    },
    components: {
        voH,
        voN
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
    `
}