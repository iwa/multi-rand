/**
 * Linear Congruential Generator
 * Default values comes from Numerical Recipes book
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 *
 * @param seed
 * @param a
 * @param c
 * @param m
 * @returns
 */
export default function LCG(seed: number, a: number = 1664525, c: number = 1013904223, m: number = Math.pow(2, 32)) {
    seed = (a * seed + c) % m;
    return seed;
}