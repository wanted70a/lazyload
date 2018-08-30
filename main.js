window.onload = function(){
    let browserH  = window.innerHeight;
    let lazyItems = document.querySelectorAll('.lazy');
    lazyItems.forEach( function(element) {
        if( isInViewport(element) <  window.pageYOffset ){
            element.classList.remove('lazy');
            element.src = element.dataset.src;
        }
    });

    window.addEventListener( 'scroll', function(){
        let lazyItems = document.querySelectorAll('.lazy');
        lazyItems.forEach( function(element) {
            if( isInViewport(element) <  window.pageYOffset ){
                element.classList.remove('lazy');
                element.src = element.dataset.src;
            }
        });
    });

    //function definitions
    function isInViewport(element){
        let rect = element.getBoundingClientRect(),
        elementHeight = element.height;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        pxfromTop = rect.top + scrollTop;
        return pxfromTop -  browserH;
    }
}
