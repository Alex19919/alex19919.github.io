class AuthException extends Error {
    constructor(code, message) {
      const fullMsg = message ? `${code}: ${message}` : code;
      super(fullMsg);
      this.name = code;
      this.code = code;
      this.message = fullMsg;
    }
    
    toString() {
      return this.message;
    }
  }
  
  let isAuth = (auth)  => auth ?? false;
  let checkAuth = document.querySelector('.check-auth');
  checkAuth.addEventListener('click', () => {
    try {
      if (!isAuth()) {
        throw new AuthException('FORBIDDEN', "You don't have access to this page");
      } else {
        window.open('success.html', '_self');
      }
    } catch (e) {
      const messageParagraph = document.querySelector('.message');
      if (messageParagraph) {
        messageParagraph.textContent = e.message;
        showDialog();
      }
    }
  });
  
  let dialogBoxId=document.getElementById("dialogBox");
  
  function showDialog(e){
    dialogBoxId.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });
    
    dialogBoxId.showModal();
  }
  
  function closeDialog(){
    dialogBoxId.close(); 
  }