let indicatorContainer;
let indicatorFill;
let totalIndicatorHeight;
    
document.addEventListener("DOMContentLoaded", function(event) {
    // scroll indicator part
    resetScrollIndicator();

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
        indicatorContainer = document.getElementsByClassName('scroll-indicator')[0];
        indicatorFill = document.getElementById('scrollposition');
        totalIndicatorHeight = indicatorContainer.clientHeight;

        updateIndicator(0);
    }
})