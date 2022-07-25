const ninja = {
    _nomes: ['aranha', 'borboleta', 'cobra', 'dragao'],
    _classes: ['mortal', 'silencioso', 'matador', 'agil'],
    _alcunhas: ['dourado', 'noturno', 'lendario', 'da floresta'],
    get nomes(){
        if(this._nomes){
            return this._nomes;
        }
    },
    get classes(){
        if(this._classes){
            return this._classes;
        }
    },
    get alcunhas(){
        if(this._alcunhas){
            return this._alcunhas;
        }
    },
}

const gerarNome = (obj) =>{
    const nome = obj.nomes[Math.floor(Math.random()*obj.nomes.length)];
    console.log(nome)
    return nome;
}
const gerarClasse = (obj) =>{
    const classe = obj.classes[Math.floor(Math.random()*obj.classes.length)];
    console.log(classe)
    return classe;
}
const gerarAlcunha = (obj) =>{
    const alcunha = obj.alcunhas[Math.floor(Math.random()*obj.alcunhas.length)];
    console.log(alcunha)
    return alcunha;
}

const gerarNinja = (nome, classe, alcunha) =>{
    return `Seu nome ninja é: ${nome} ${classe} ${alcunha}.`
}

console.log(gerarNinja(gerarNome(ninja),gerarClasse(ninja),gerarAlcunha(ninja)));