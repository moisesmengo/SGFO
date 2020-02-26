module.exports = app => {
    // ou existe ou lança o erro
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    // se não existir lança o erro
    function notExistsOrError(value, msg){
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        }
        throw msg
    }
    // testar se dois valores são iguais
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }
    
    return { existsOrError, notExistsOrError, equalsOrError }
}