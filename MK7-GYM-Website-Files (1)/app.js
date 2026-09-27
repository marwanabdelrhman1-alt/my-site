const loginModal = document.getElementById("loginModal");
const profileModal = document.getElementById("profileModal");

function openLogin(){
  loginModal.classList.add("show");
  loginModal.setAttribute("aria-hidden","false");
}
function closeLogin(){
  loginModal.classList.remove("show");
  loginModal.setAttribute("aria-hidden","true");
}
function closeProfile(){
  profileModal.classList.remove("show");
  profileModal.setAttribute("aria-hidden","true");
}
function login(){
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");
  if(phone === "01000000000" && password === "1234"){
    error.textContent = "";
    closeLogin();
    profileModal.classList.add("show");
    profileModal.setAttribute("aria-hidden","false");
  }else{
    error.textContent = "بيانات الدخول غير صحيحة. جرّب بيانات النسخة التجريبية أسفل النموذج.";
  }
}
window.addEventListener("keydown", e=>{
  if(e.key === "Escape"){ closeLogin(); closeProfile(); }
});
loginModal.addEventListener("click", e=>{ if(e.target === loginModal) closeLogin(); });
profileModal.addEventListener("click", e=>{ if(e.target === profileModal) closeProfile(); });
