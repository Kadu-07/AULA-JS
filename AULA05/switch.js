// 1 - bom
// 2 - excelente
// 3 - regular
// 4 - ruim
// 5 - horrível
let atendimento = 1

switch (atendimento) {
    case 1:
        console.log("Vc foi avaliado com: Bom")
        break;
    case 2:
        console.log("Vc foi avaliado com: Execelente");
        break;
    case 3:
        console.log("Vc foi avaliado com: Regular");
        break;
    case 4:
        console.log("Vc foi avaliado com: Ruim");
        break;
    case 5:
        console.log("Vc foi avaliado com: Horrível");
        break;
        
    default:
        console.log("Vc não foi avaliado.");
        break;
}