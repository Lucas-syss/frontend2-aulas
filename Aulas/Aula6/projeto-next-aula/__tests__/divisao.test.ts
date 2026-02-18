import divisao from "../src/app/components/TestFunction";

test("Testa a função de divisão", () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(9, 3)).toBe(3);
    expect(() => divisao(5, 0)).toThrow("Divisão por zero não é permitida.");
});