type Player = {
  name: string;
  age: number;
  game: string;
}

interface jogador<Player> {
  name: string;
  age: number;
  game: string;
}

const utilizadorPartial: Partial<Player> = { name: "Pedro" };
const utilizadorReadOnly: Readonly<Player> = { name: "Pedro", age: 18, game: "Elden Ring" };
const utilizadorPick: Pick<Player, "name" | "game"> = { name: "Pedro", game: "Elden Ring" };
const utilizadorOmmit: Omit<Player, "age"> = { name: "Pedro", game: "Elden Ring" };

console.log(utilizadorPartial, '\n', utilizadorReadOnly, '\n', utilizadorOmmit, '\n', utilizadorPick)