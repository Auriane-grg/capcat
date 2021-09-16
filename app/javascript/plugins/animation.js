const animation = () => {

  if (document.querySelectorAll('.reveal').length === 0) { return 
  }
  const ratio = 0.1
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
    // dès que 10% de l'element est visible on déclenche
  }


  const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
      
    };

  const observer = new IntersectionObserver(handleIntersect, options);

  document.querySelectorAll('.reveal').forEach((item) => {
    observer.observe(item)
  });

}

export { animation }