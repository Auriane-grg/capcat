const spaceHome = () => {
    const canvas = document.getElementById('canvas-capcat');
    const capcat = document.querySelector('.left-capcat');
    const description = document.querySelector('.description');

    if (!capcat) { return }; 

    const heightWanted = description.clientHeight;
    const widthWanted = description.clientWidth;

    
  
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = widthWanted;
    ctx.canvas.height = heightWanted;
    
  
    let particuleTab;
  
    class Particule{
      constructor(x, y, directionX, directionY, taille, couleur){
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.taille = taille;
          this.couleur = couleur;
      }
      dessine(){
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.taille, 0, Math.PI * 2, false);
          ctx.fillStyle = this.couleur;
          ctx.fill();
      }
      MAJ(){
          if(this.x + this.taille > canvas.width || this.x - this.taille < 0) {
              this.directionX = -this.directionX;
          }
          if(this.y + this.taille > canvas.height || this.y - this.taille < 0){
              this.directionY = -this.directionY;
          }
          this.x += this.directionX;
          this.y += this.directionY;
          this.dessine();
      }
  
    }
  // const obj1 = new Particule(300,300,1,1,100,"black");
  // console.log(obj1)
  // obj1.dessine();
  
    function init(){
        particuleTab = [];
        for(let i = 0; i < 100; i++){
            let taille = (Math.random() + 0.01) * 20;
            let x = Math.random() * (window.innerWidth - taille * 2)
            let y = Math.random() * (window.innerHeight - taille * 2)
            let directionX = (Math.random() * 0.4) - 0.2;
            // -0.2 / 0.2
            let directionY = (Math.random() * 0.4) - 0.2;
            let couleur = "black";
  
            particuleTab.push(new Particule(x,y,directionX,directionY,taille, couleur));
            
        }
    }
  
    function animation(){
        requestAnimationFrame(animation);
        ctx.clearRect(0,0,window.innerWidth, heightWanted);
  
        for(let i = 0; i < particuleTab.length; i++){
            particuleTab[i].MAJ();
        }
    }   
  
    init();
    animation();
    console.log(particuleTab)
  
  
    function resize(){
        init();
        animation();
    }
  
    let doit;
    window.addEventListener('resize', () => {
        clearTimeout(doit);
        doit = setTimeout(resize, 100);
        ctx.canvas.width = widthWanted;
        ctx.canvas.height = heightWanted;
        
    });
  
  }
  
  

export { spaceHome }