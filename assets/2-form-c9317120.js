const e=document.querySelector(".feedback-form"),m=()=>{const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))},l=()=>{const a=localStorage.getItem("feedback-form-state");if(a){const{email:t,message:s}=JSON.parse(a);e.elements.email.value=t,e.elements.message.value=s}};e.addEventListener("input",m);window.addEventListener("load",l);e.addEventListener("submit",a=>{a.preventDefault(),localStorage.removeItem("feedback-form-state"),e.elements.email.value===""&&alert("Please enter your email"),e.elements.message.value===""&&alert("Please enter your message"),console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),e.reset()});
//# sourceMappingURL=2-form-c9317120.js.map
