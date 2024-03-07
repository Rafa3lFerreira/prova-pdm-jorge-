   let chamadaDeAlunos = [
        {
            nome: "Kayky",
            idade: 16,
            materias: [
                {
                    nome: "Tecnologias em Inteligência Artificial",
                    presenca: 75,
                    nota: 10
                },
                {
                    nome: "Programação para Dispositivos Móveis",
                    presenca: 90,
                    nota: 10
                },
            ],
            numeroChamada: 1221
        },
        {
            nome: "Ana",
            idade: 17,
            materias: [
                {
                    nome: "BD1",
                    presenca: 100,
                    nota: 10
                },
                {
                    nome: "Programação para Dispositivos Móveis",
                    presenca: 90,
                    nota: 7.5
                },
            ],
            numeroChamada: 1222
        },
        {
            nome: "Matheus",
            idade: 20,
            materias: [
                {
                    nome: "Tecnologias em Inteligência Artificial",
                    presenca: 79,
                    nota: 8.5
                },
                {
                    nome: "Programação para Dispositivos Móveis",
                    presenca: 60,
                    nota: 6.5
                },
            ],
            numeroChamada: 1223
        },
        {
            nome: "Jorge",
            idade: 19,
            materias: [
                {
                    nome: "Tecnologias em Inteligência Artificial",
                    presenca: 100,
                    nota: 10
                },
                {
                    nome: "Programação para Dispositivos Móveis",
                    presenca: 79,
                    nota: 10
                },
            ],
            numeroChamada: 1224
        },
        {
            nome: "Richard",
            idade: 18,
            materias: [
                {
                    nome: "BD2",
                    presenca: 74,
                    nota: 10
                },
                {
                    nome: "BD1",
                    presenca: 90,
                    nota: 7
                },
            ],
            numeroChamada: 1225
        },
    ]

    function alunoNomeNota(chamadaDeAlunos){
        chamadaDeAlunos.forEach(dados => {
            console.log(dados.nome, dados.idade)
        });
    }

     alunoNomeNota(chamadaDeAlunos)

    function alunoAprovado(){
        chamadaDeAlunos.forEach(dados => {
            if(dados.materias[0].nota >= 6 && dados.materias[0].presenca >= 75){
                console.log(dados.nome)
            }  
        });
    }

    alunoAprovado(chamadaDeAlunos)

    function alunoReprovado(){

        chamadaDeAlunos.forEach(media => {
            if(media.materias[0].nota < 6 && media.materias[0].presenca < 75){
                console.log(media.nome)
            }
        });
    }

    alunoReprovado(chamadaDeAlunos)

    function MaioresNotas(chamadaDeAlunos){

        for (let i = 0; i < chamadaDeAlunos[materias].length; index++) {
            if(notas.nota[i] > notamaior){
                notamaior = notas.nota[i];
            }
            console.log(notas);
        }
    }

    // MaioresNotas(chamadaDeAlunos)   

    function MenoresNotas(){

        chamadaDeAlunos.forEach(notas => {
            for (let j = 0; j < chamadaDeAlunos.materias.length; index++) {
                console.log(notas.materias[j])
            }
        });
    }

    // MenoresNotas(chamadaDeAlunos);
