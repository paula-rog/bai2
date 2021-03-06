Vue.component("navigation", {
  template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand me-5" href="#">Spis Siłowni</a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="navbar-text me-3">Kaszak Karolina</li>
                        <li class="navbar-text me-3">Kucharzyk Sebastian</li>
                        <li class="navbar-text me-3">Olejarz Mateusz</li>
                        <li class="navbar-text me-3">Rogóż Paula</li>
                    </ul>
                    <div class="d-flex">
                        <button
                        type="button"
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                        >
                        Dodaj siłownię
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `,
});
