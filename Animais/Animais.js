class Animais{
   constructor(genero, classe,ordem,habitat){
        this.genero = genero
        this.classe =classe;
        this.ordem = ordem
        this.habitat = habitat
   }

    

    locomoverSe(movimento){
        console.log(`eu consigo me movimentar por meio de ${movimento}`)
    }
    alimentarSe(alimento){
        console.log(`Eu posso comer ${alimento}`)
    }
}

class Mamiferos extends Animais{

    constructor(genero, ordem){
        super(genero,"Mamallia",ordem,"aquático e terrestre")
       
    }
   
    locomoverSe(){
        {
             super.locomoverSe("patas/pés ou nadadeiras pois sou mamífero")
        }
      
    }
}

class Aves extends Animais{

    locomoverSe(){
       super.locomoverSe("asas ou patas, então posso voar")
    }
}

class Peixes extends Animais{

    locomoverSe(){
       super.locomoverSe("nadadeiras, então posso nadar")
    }
}


var vc = new Mamiferos('masculino',)
console.log(vc)
// class Aves extends Animais{
    
// }
// class Peixes extends Animais{
    
// }

// var oi = new Mamiferos();
// oi.locomoverSe();