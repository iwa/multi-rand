/**
 * Middle Square Method
 * Pseudo random number generator, will always return a 2 digit number
 * Invented by John von Neumann in 1946
 *
 * @param seed Inital seed number
 * @param round Number of rounds to run
 * @returns Pseudo random number
 */
export default function MSM(seed: number, round: number = 10) {
    for (let i = 0; i < round; i++) {
        if (seed > 100) {
            seed = Math.floor(Math.pow(seed, 2) / 10) % 100;
        } else {
            seed = Math.floor(Math.pow(seed, 2)) % 100;
        }
    }

    return seed;
}