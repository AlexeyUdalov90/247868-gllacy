function OpenFeedback(){popupFeedback.classList.add("modal-feedback-show"),overlay.classList.add("modal-show")}function CloseFeedback(){popupFeedback.classList.remove("modal-feedback-show"),overlay.classList.remove("modal-show")}var btnFeedback=document.querySelector(".button-feedback"),popupFeedback=document.querySelector(".modal-feedback"),closeFeedback=document.querySelector(".modal-feedback .close"),overlay=document.querySelector(".modal-overlay"),linkLogin=document.querySelector(".link-login"),formLogin=document.querySelector(".login-form"),login=formLogin.querySelector("[name=login]"),password=formLogin.querySelector("[name=password]"),submenu=document.querySelector(".site-submenu"),submenuLinks=submenu.querySelectorAll("a"),searchBlock=document.querySelector(".link-search + .hover-block"),formItemsSearch=searchBlock.querySelectorAll("form *"),loginBlock=document.querySelector(".link-login + .hover-block"),formItemsLogin=loginBlock.querySelectorAll("form *"),basketBlock=document.querySelector(".link-basket + .basket"),basketItems=document.querySelectorAll(".basket *"),storage=localStorage.getItem("login");linkLogin.addEventListener("click",function(e){e.preventDefault()}),linkLogin.addEventListener("mouseover",function(e){e.preventDefault(),storage?(login.value=storage,password.focus()):login.focus()}),formLogin.addEventListener("submit",function(e){login.value&&password.value&&(e.preventDefault(),localStorage.setItem("login",login.value))}),btnFeedback&&(btnFeedback.addEventListener("click",function(e){e.preventDefault(),OpenFeedback()}),closeFeedback.addEventListener("click",function(e){e.preventDefault(),CloseFeedback()}),window.addEventListener("keydown",function(e){27===e.keyCode&&popupFeedback.classList.contains("modal-feedback-show")&&CloseFeedback()})),submenuLinks.forEach(function(e){e.addEventListener("focus",function(){submenu.classList.add("submenu-show")}),e.addEventListener("blur",function(){submenu.classList.remove("submenu-show")})}),formItemsSearch.forEach(function(e){e.addEventListener("focus",function(){searchBlock.classList.add("hover-block-show")}),e.addEventListener("blur",function(){searchBlock.classList.remove("hover-block-show")})}),formItemsLogin.forEach(function(e){e.addEventListener("focus",function(){loginBlock.classList.add("hover-block-show")}),e.addEventListener("blur",function(){loginBlock.classList.remove("hover-block-show")})}),basketBlock&&basketItems.forEach(function(e){e.addEventListener("focus",function(){basketBlock.classList.add("basket-show")}),e.addEventListener("blur",function(){basketBlock.classList.remove("basket-show")})});