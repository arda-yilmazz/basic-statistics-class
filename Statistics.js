
class Statistics {
    constructor() {
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    }

    count() {
        return this.ages;
    }

    sum() {
        return this.ages.reduce((acc, curr) => acc + curr)
    }

    min() {
        return Math.min(...this.ages);
    }

    max() {
        return Math.max(...this.ages)
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return Math.ceil(this.sum() / this.ages.length);
    }

    median() {
        const sortedArray = this.ages.sort((a, b) => a - b)

        const half = Math.floor(sortedArray.length / 2);

        if (sortedArray.length % 2) {
            return sortedArray[half]
        }

        return (sortedArray[half - 1] + sortedArray[half + 1]) / 2.0
    }

    mode() {
        const mode = Object.values(
            this.ages.reduce((count, e) => {
                if (!(e in count)) {
                    count[e] = [0, e];
                }

                count[e][0]++;
                return count;
            }, {})
        ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1]

        const count = Object.values(
            this.ages.reduce((count, e) => {
                if (!(e in count)) {
                    count[e] = [0, e];
                }

                count[e][0]++;
                return count;
            }, {})
        ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[0]

        return { mode, count };

    }
}

const statistics = new Statistics();