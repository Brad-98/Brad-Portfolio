const viewProjectsBtn = document.querySelector("#view-projects-btn");
const backToTopBtn = document.querySelector("#back-to-top-btn");

const smoothScroll = (target, duration) =>
{
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = currentTime =>
    {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    };  
    
    const ease = (t, b, c, d) =>
    {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

viewProjectsBtn.addEventListener('click', (e) =>
{
    e.preventDefault();

    smoothScroll("#project-section", 1000);
});

backToTopBtn.addEventListener('click', (e) =>
{
    e.preventDefault();

    smoothScroll("#home-section", 2000);
});