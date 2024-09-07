class RecintosZoo {

    analisaRecintos(animal, quantidade) {
            const animaisDoZoo = [
                'LEAO',
                'LEOPARDO',
                'CROCODILO',
                'MACACO',
                'GAZELA',
                'HIPOPOTAMO'
            ];
            
            const TamanhoAnimal = {
                LEAO: 3,
                LEOPARDO: 2,
                CROCODILO: 3,
                MACACO: 1,
                GAZELA: 2,
                HIPOPOTAMO: 4
            };
            
            //?Caso animal informado seja inválido, apresentar erro "Animal inválido"
            //?Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
            //?Caso não haja recinto possível, apresentar erro "Não há recinto viável"

            if (!animaisDoZoo.includes(animal)) {
               return { erro: "Animal inválido" };
            }//* feito
            if (typeof quantidade !== 'number' || quantidade <= 0) {
                return { erro: "Quantidade inválida" };
            }//* feito
            if (animal === 'MACACO' && quantidade >= 10) {
                return { erro: "Não há recinto viável" };
            }//* feito



            const recintos = [
                { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes:  (TamanhoAnimal['MACACO'] * 3), animal: 'MACACO'}, // 3 macacos
                { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: 0}, // vazio
                { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: (TamanhoAnimal['GAZELA'] * 1), animal: 'GAZELA'}, // 1 gazela
                { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: 0 }, // vazio
                { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: (TamanhoAnimal['LEAO'] * 1), animal: 'LEAO'} // 1 leão
            ];
        var recintosViaveis = []

        recintos.forEach(recinto => {
            let espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes;
            
            const biomaAdequado = (
                (animal === "LEAO" && recinto.bioma === "savana" && recinto.animal === 'LEAO' || recinto.animal === "") ||
                (animal === "LEOPARDO" && recinto.bioma === "savana") ||
                (animal === "CROCODILO" && recinto.bioma === "rio") ||
                (animal === "MACACO" && (recinto.bioma === "savana" || recinto.bioma === "floresta" || recinto.bioma === "savana e rio") && (recinto.animal !== 'LEAO' || recinto.animal !== 'LEOPARDO' || recinto.animaisExistentes !== 0)) ||
                (animal === "GAZELA" && (recinto.bioma === "savana" || "savana e rio")) ||
                (animal === "HIPOPOTAMO" && (recinto.bioma === "savana e rio" || recinto.bioma === "rio"))
            );

            if (biomaAdequado && espacoLivre >= quantidade) {
                    espacoLivre -= (quantidade * TamanhoAnimal[animal])
                    if(espacoLivre > 0){
                        recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`);
                        return recintosViaveis
                    }else{
                       
                        return { erro: 'Não há recinto viável'}
                    }
                    
                }
        });

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }
        return { recintosViaveis };
        
        }
    }


export { RecintosZoo as RecintosZoo };

new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
