function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loadMenu() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'menu.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("mySidebar").innerHTML = xhr.responseText;

            document.querySelector('.closebtn').addEventListener('click', closeNav);
            document.querySelector('.openbtn').addEventListener('click', openNav);

            var dropdown = document.getElementsByClassName("dropdown-btn");
            for (var i = 0; i < dropdown.length; i++) {
                dropdown[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var dropdownContent = this.nextElementSibling;
                    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
                });
            }

            var smalldropdown = document.getElementsByClassName("small-dropdown-btn");
            for (var i = 0; i < smalldropdown.length; i++) {
                smalldropdown[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var smalldropdownContent = this.nextElementSibling;
                    smalldropdownContent.style.display = smalldropdownContent.style.display === "block" ? "none" : "block";
                });
            }
        }
    };
    xhr.send();
}

window.onload = function() {
    loadMenu();
};

const scriptJquery = document.createElement('script');
scriptJquery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.head.appendChild(scriptJquery);

const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
document.head.appendChild(scriptPopper);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.head.appendChild(scriptBootstrap);
