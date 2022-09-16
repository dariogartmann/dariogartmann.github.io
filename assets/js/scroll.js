document.addEventListener("DOMContentLoaded", function(event) {
    // smooth scrolling for anchors with class="scroll"
    document.querySelectorAll('a[href^="#"].scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });

    // scroll indicator part
    let indicatorContainer = document.getElementsByClassName('scroll-indicator')[0];
    let indicatorFill = document.getElementById('scrollposition');
    let totalIndicatorHeight = indicatorContainer.clientHeight;

    // add scroll listener
    window.addEventListener('scroll', function(event) {
        let scrollPosition = this.scrollY;
        let totalPageHeight = document.body.getBoundingClientRect().height;
        let totalWindowHeight = window.innerHeight - 96;
        let percentageScrolled = getScrolledPercentage(totalPageHeight - totalWindowHeight, scrollPosition);
        
        updateIndicator(percentageScrolled);
    });

    function updateIndicator(percentageScrolled) {
        let height = totalIndicatorHeight / 100.00 * percentageScrolled;
        indicatorFill.style.height = height + "px";
    }

    // Get how many percent of a container has been scrolled.
    function getScrolledPercentage(containerHeight, scrollPosition){
        let percentageScrolled = 100 / containerHeight * scrollPosition;
        return Math.round(percentageScrolled);
    }

    function resetScrollIndicator(){
        totalIndicatorHeight = document.getElementsByClassName('scroll-indicator')[0].clientHeight;
        indicatorFill = document.getElementById('scrollposition');

        updateIndicator(0);
    }
})