const login = document.getElementById("login");
login.onclick = (e) => {
  e.preventDefault();
// بتوع الفيلد
  const usernameAddress = document.getElementById("username").value;
  const passwordAddress = document.getElementById("password").value;
// بتوع اللوكال ستوردج
  const getUser = localStorage.getItem("Username"); 
  const getPass = localStorage.getItem("Password");

  //لو مدخلتش حاجة في البوكس الابيض في الوزر نيم والباسورد
  if (usernameAddress == "" && passwordAddress == "") {
    swal("Input field has no value"); // فانكشن بتاعت مكتبة السويت اليرت بتظهر لو الشرط اللي فوق اتحقق
  } 
  
  
  else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      swal({
        text: `Login successful, hi ${usernameAddress}`,
        timer: 2000, // باللملي ساكند
        button: false, 
        icon: 'success', 
        textColor: '#28a745'
      }).then(() => {
        setTimeout(() => {
          window.location.href = "../home\ page/home.html"; 
        }, 2000);
      });
    } else {
      swal("Something wrong"); // لو الشرطين اللي فوق متحققوش 
    }
  }
}
