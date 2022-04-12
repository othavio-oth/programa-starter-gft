class Medicamento{
    constructor( nomeMedicamento, valorMedicamento){
            this.nomeMedicamento = nomeMedicamento;
            this.valorMedicamento = valorMedicamento
    }
    variavelDeDesconto=1;


    apresentarValorMedicamento(idade){
        if (idade>80) {
            this.variavelDeDesconto = 0.5
        } else if(idade<=80&&idade>70){
            this.variavelDeDesconto = 0.7
        } else if(idade>=60&&idade<=70){
            this.variavelDeDesconto = 0.8;
        }

        let valorTotal = this.valorMedicamento*this.variavelDeDesconto;

        console.log("O medicamento custou " +valorTotal+ " reais")
    }
}

var dipirona = new Medicamento("dipirona", 10)
dipirona.apresentarValorMedicamento(20)
