document.addEventListener("DOMContentLoaded", function() {

    var current_fs, next_fs, previous_fs; // fieldsets
    var opacity;
    var current = 1;
    var steps = document.querySelectorAll("fieldset").length;
    
    setProgressBar(current);
    
    document.querySelectorAll(".next").forEach(function(nextBtn) {
        nextBtn.addEventListener("click", function() {

            current_fs = this.parentElement;
            next_fs = current_fs.nextElementSibling;

            // Add Class Active
            var index = Array.from(document.querySelectorAll("fieldset")).indexOf(next_fs);
            document.querySelectorAll("#progressbar li")[index].classList.add("active");

            // Show the next fieldset
            next_fs.style.display = "block";

            // Hide the current fieldset with style
            var animation = current_fs.animate([{opacity: 1}, {opacity: 0}], {duration: 500});
            animation.onfinish = function() {
                current_fs.style.display = "none";
                current_fs.style.position = "relative";
                next_fs.style.opacity = "1";
            };

            setProgressBar(++current);
        });
    });
    
    document.querySelectorAll(".previous").forEach(function(prevBtn) {
        prevBtn.addEventListener("click", function() {

            current_fs = this.parentElement;
            previous_fs = current_fs.previousElementSibling;

            // Remove class active
            var index = Array.from(document.querySelectorAll("fieldset")).indexOf(current_fs);
            document.querySelectorAll("#progressbar li")[index].classList.remove("active");

            // Show the previous fieldset
            previous_fs.style.display = "block";

            // Hide the current fieldset with style
            var animation = current_fs.animate([{opacity: 1}, {opacity: 0}], {duration: 500});
            animation.onfinish = function() {
                current_fs.style.display = "none";
                current_fs.style.position = "relative";
                previous_fs.style.opacity = "1";
            };

            setProgressBar(--current);
        });
    });
    
    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        document.querySelector(".progress-bar").style.width = percent + "%";
    }
    
    document.querySelector(".submit").addEventListener("click", function() {
        return false;
    });

});
