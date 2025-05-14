/**
 * Math.random() wrapper
 *
 * @param minimum Optional minimum value, default is 0
 * @param maximum Optional maximum value, default is 10
 * @returns Pseudo random number between minimum and maximum
 */
export default function MathRandom(minimum: number = 0, maximum: number = 10) {
    return Math.random() * (maximum - minimum) + minimum;
}