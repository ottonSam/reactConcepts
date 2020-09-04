function generateNumberNotRepeat(min, max, arr) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return arr.includes(random) ? 
    generateNumberNotRepeat(min, max, arr) : 
    random;

};

export default function generateXNumbers(n) {
    const numbers = Array(n)
        .fill(0)
        .reduce((nums) => {
            const newNumber =  generateNumberNotRepeat(1, 60, nums);
            return [ ...nums, newNumber ]

        }, [])
        .sort((n1, n2) => n1 - n2);

        return numbers;
};

