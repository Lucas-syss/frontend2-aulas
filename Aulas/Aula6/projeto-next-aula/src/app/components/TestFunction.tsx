function divisao(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}


export default divisao;