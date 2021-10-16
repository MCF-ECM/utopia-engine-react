export const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

export const diff = (table) =>  table[0] * 100 + table[1] * 10 + table[2]
    - (table[3] * 100 + table[4] * 10 + table[5]);
