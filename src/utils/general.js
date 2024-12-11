
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

export const restHttp = async (url) => {
    const resultado = await fetch(url, { method: "GET" }).then((res) => res.json())
    return resultado
}