export class Time{
    hora
    minutos
    segundos
    constructor(hora, minutos, segundos){
        this.hora = hora
        this.minutos = minutos
        this.segundos = segundos
    }
}

export async function Tiempo(tiempo){
    return new Promise((resolve, reject) => {
        const hora = new Time(
            tiempo.houra,
            tiempo.minutos,
            tiempo.segundos
        )
        resolve(hora)
        reject(error)
    });
}