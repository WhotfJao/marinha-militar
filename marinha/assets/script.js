document.addEventListener('DOMContentLoaded', function() {
    const leftMenuIcon = document.querySelector('.menu-icon-container-left .menu-icon');
    const rightMenuIcon = document.querySelector('.menu-icon-container .menu-icon');
    const offcanvasMenuLeft = new bootstrap.Offcanvas(document.getElementById('offcanvasMenuLeft'), { backdrop: false });
    const offcanvasMenuRight = new bootstrap.Offcanvas(document.getElementById('offcanvasMenu'), { backdrop: false });

    leftMenuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        offcanvasMenuLeft.show();
    });

    rightMenuIcon.addEventListener('click', function() {
        offcanvasMenuRight.show();
    });

    document.querySelector('.offcanvas-start').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.querySelector('.offcanvas-end').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

