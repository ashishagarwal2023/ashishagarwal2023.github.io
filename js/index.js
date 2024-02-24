(function() {
    function y(s) {
      return s.replace(/[a-zA-Z]/g,(c)=>String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));
    }
  
    const reveal = document.getElementById('email');
    const dialog = document.querySelector('dialog');
    reveal.addEventListener('click', () => {
      dialog.setAttribute('open', 'open');
    });

    const theme = document.getElementById("theme");
    theme.addEventListener('click', () => {
      if(document.body.parentNode.getAttribute("data-theme") === "dark"){
        document.body.parentNode.setAttribute("data-theme", "light");
      }else if(document.body.parentNode.getAttribute("data-theme") === "light"){
        document.body.parentNode.setAttribute("data-theme", "dark");
      }
    } )
  
    function revealEmail() {
      const email = 'si' + atob('dGVAYW4=') + 'na.' + atob(y('oTqv')) + 't';
  
      const emailLink = document.createElement('a');
      emailLink.setAttribute('href', `mailto:${email}`);
      emailLink.innerText = email;
  
      reveal.replaceWith(emailLink);
    }
  
    function notInterested() {
      const notInterested = document.createElement('span');
      notInterested.innerText = 'I am not interested in your email.';
  
      reveal.replaceWith(notInterested);
    }
  
    const yesButton = dialog.querySelector('#yes-button');
    const noButton = dialog.querySelector('#no-button');
  
    yesButton.addEventListener('click', () => {
      dialog.removeAttribute('open');
  
      localStorage.canSeeEmail = false;
  
      notInterested();
    });
  
    noButton.addEventListener('click', () => {
      dialog.removeAttribute('open');
  
      localStorage.canSeeEmail = true;
  
      revealEmail();
    });
  
    if (localStorage.canSeeEmail === 'true') {
      revealEmail();
    } else if (localStorage.canSeeEmail === 'false') {
      notInterested();
    }
  })();