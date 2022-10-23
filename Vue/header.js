export default {
    data() {
        return {
            isDark: false
        }
    },
    methods: {
        darkModeHandle() {
            console.log("dark mode handle");
            var val=document.getElementById("darkmode").value;
            if (val=="light") {
                document.getElementById("darkmode").value="dark";
                this.isDark=true;
            }
            else {
                document.getElementById("darkmode").value="light";
                this.isDark=false;
            }
            if (this.isDark) {
                $(".container-fluid").css("backgroundColor","#000000");
                $("#Home").css("color","white");
                $(".text-start").css("color","white");
                $(".navbar").removeClass("alert-secondary");
                $(".navbar").addClass("alert-dark");
                $("#detailMovie").css("color","white");
                $(".alert").removeClass("alert-secondary");
                $(".alert").addClass("alert-dark");
            }
            else {
                $(".container-fluid").css("backgroundColor","#A6A6A6");
                $("#Home").css("color","black");
                $(".text-start").css("color","black");
                $(".navbar").removeClass("alert-dark");
                $(".navbar").addClass("alert-secondary");
                $("#detailMovie").css("color","black");
                $(".alert").removeClass("alert-dark");
                $(".alert").addClass("alert-secondary");
            }
            console.log(val);
        }
    },
    template: `
        <div class="alert" :class="isDark?'alert-dark':'alert-secondary'" role="alert">
            <div class="row">
                <div class="col-4" id="mssv">20120454</div>
                <div class="col-4" id="headingTitle">Movies info</div>
                <div class="col-4 d-flex align-items-end flex-column bd-highlight mb-3 justify-content-between" id="keyAPI">
                    <div class="p-2 bd-highlight">key API</div>
                    <div class="form-check form-switch mt-auto p-2 bd-highlight">
                        <input class="form-check-input" type="checkbox" id="darkmode" name="darkmode" value="light" @change="darkModeHandle">
                        <label class="form-check-label" for="mySwitch">Dark Mode</label>
                    </div>
                </div>
            </div>
        </div>
    `
}