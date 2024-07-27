let anchors =document.querySelectorAll('a[href^="#"]');


anchors.forEach(anchor=>{
  anchor.addEventListener('click',function(e) {
    e.preventDefault();


    const sectionId = anchor.getAttribute('href').substring(1); 
    const section = document.getElementById(sectionId); 
    
    if (section) {
      const offsetTop = section.offsetTop; 
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' 
      })
    }

  }
  )
})
