/**
 * XorShift
 * PRNG that uses bitwise operations to generate random numbers
 * Invented by George Marsaglia in 2003
 *
 * @param seed Inital seed number
 * @param round Number of rounds to run
 * @returns Pseudo random number
 */
export default function XorShift(seed: number, round: number = 10) {
    for (let i = 0; i < round; i++) {
        seed ^= (seed << 13);
        seed ^= (seed >> 17);
        seed ^= (seed << 5);
    }

    return seed < 0 ? -seed : seed;
}