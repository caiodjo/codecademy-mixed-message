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

