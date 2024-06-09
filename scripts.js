
function showOptions(projectId) {
    const options = document.getElementById(projectId);
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.project-card');
    if (!isClickInside) {
        const projectOptions = document.querySelectorAll('.project-options');
        projectOptions.forEach(function(options) {
            options.style.display = 'none';
        });
    }
});
