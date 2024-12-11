
export const arrayChunk = async (list, total) => {
    const chunkSize = total;
    let chunk = []
    for (let i = 0; i < list.length; i += chunkSize) {
        chunk.push(list.slice(i, i + chunkSize));
    }
    return chunk
}

export const consoleLog = async()=>{
    console.log('hola')
}
export const resHttpStorage = async (url,nameStorage)=>{
  var listCards = localStorage.getItem(nameStorage)
  let resultado = []
  if(listCards){
    resultado = JSON.parse(listCards)
  }else{
    resultado = await restHttp(url)
    localStorage.setItem(nameStorage, JSON.stringify(resultado));
  }
  return resultado
}
export const restHttp = async (url) => {
    const resultado = await fetch(url, { method: "GET" }).then((res) => res.json())
    return resultado
}
