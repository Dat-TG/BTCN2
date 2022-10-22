export default {
    data() {
        return {
            
        }
    },
    template: `
        <div class="alert alert-secondary" role="alert">
            <div class="row">
                <div class="col-4" id="mssv">20120454</div>
                <div class="col-4" id="headingTitle">Movies info</div>
                <div class="col-4 d-flex align-items-end flex-column bd-highlight mb-3 justify-content-between" id="keyAPI">
                    <div class="p-2 bd-highlight">key API</div>
                    <div class="form-check form-switch mt-auto p-2 bd-highlight">
                        <input class="form-check-input" type="checkbox" id="darkmode" name="darkmode">
                        <label class="form-check-label" for="mySwitch">Dark Mode</label>
                    </div>
                </div>
            </div>
        </div>
    `
}