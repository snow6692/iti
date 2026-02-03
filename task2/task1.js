export function Sequence(start, end, step) {
    if (step === 0) {
        throw new Error("Step cannot be zero");
    }


    let list = [];


    function fillList() {
        let i = start
        let condition = () => (step > 0 ? i <= end : i >= end);
        for (
            start;
            condition();
            i += step
        ) {
            list.push(i);
        }
    }

    fillList();


    function validateValue(value, mode) {
        if (list.includes(value)) {
            throw new Error("Duplicated value is not allowed");
        }

        if (list.length === 0) return;

        if (mode === "append") {
            const expected = list[list.length - 1] + step;
            if (value !== expected) {
                throw new Error("Value is not sequential");
            }
        }

        if (mode === "prepend") {
            const expected = list[0] - step;
            if (value !== expected) {
                throw new Error("Value is not sequential");
            }
        }
    }


    this.append = function (value) {
        validateValue(value, "append");
        list.push(value);
    };

    this.prepend = function (value) {
        validateValue(value, "prepend");
        list.unshift(value);
    };

    this.pop = function () {
        if (list.length === 0) return null;
        return list.pop();
    };

    this.dequeue = function () {
        if (list.length === 0) return null;
        return list.shift();
    };

    this.getList = function () {
        return [...list];
    };

    this.toString = function () {
        return list.join(", ");
    };
}



console.log("the begging of task 1")


const seq = new Sequence(1, 5, 1);

seq.append(6);
seq.prepend(0);

console.log(seq.toString());
// 0, 1, 2, 3, 4, 5, 6

// seq.append(8);

// seq.append(6);

console.log("The end of task 1");





