function ready(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}function matches(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}const iconEntities={CHECKED:"&#xE834;",UNCHECKED:"&#xE835;"},updateCheckbox=function(e){console.log(e);var t=e.querySelector("input[type='checkbox']"),c=e.querySelector("i.material-icons");t.checked?(e.classList.add("active"),c.innerHTML=iconEntities.CHECKED):(e.classList.remove("active"),c.innerHTML=iconEntities.UNCHECKED)},delegatedChangeHandler=function(e){for(var t=e.target;!t.classList.contains("checkbox");){if(matches(t,"body"))return;t=t.parentNode}updateCheckbox(t)};ready(function(){document.querySelectorAll(".checkbox").forEach(updateCheckbox)}),document.removeEventListener("change",delegatedChangeHandler),document.addEventListener("change",delegatedChangeHandler);