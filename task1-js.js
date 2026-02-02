const linkedList = {

    data: [],

    hasValue(value) {
        return this.data.some(item => item.value === value);
    },

    findIndex(value) {
        let i = 0;

        while (i < this.data.length && this.data[i].value < value) {
            i++;
        }
        return i;
    },


    enqueue(obj) {
        const value = obj.value;

        if (this.hasValue(value)) {
            throw new Error("Duplicate value not allowed");
        }

        const index = this.findIndex(value);

        this.data.unshift(obj);

        if (index !== 0) {
            const item = this.data.shift();
            this.data.splice(index, 0, item);
        }
    }

    ,

    push(obj) {
        const value = obj.value;

        if (this.hasValue(value)) {
            throw new Error("Duplicate value not allowed");
        }

        if (
            this.data.length > 0 &&
            value < this.data[this.data.length - 1].value
        ) {
            throw new Error("Value breaks ascending order");
        }

        this.data.push(obj);
    },

    insertAt(index, obj) {
        const value = obj.value;

        if (this.hasValue(value)) {
            throw new Error("Duplicate value not allowed");
        }

        const prev = this.data[index - 1]?.value ?? -Infinity;
        const next = this.data[index]?.value ?? Infinity;

        if (value > prev && value < next) {
            this.data.splice(index, 0, obj);
        } else {
            throw new Error("Value not in correct sequence");
        }
    },

    pop() {
        if (this.data.length === 0) return null;
        return this.data.pop();
    },

    remove(val) {
        const index = this.data.findIndex(item => item.value === val);
        if (index === -1) {
            return "data not found";
        }
        this.data.splice(index, 1);
    },

    dequeue() {
        if (this.data.length === 0) return null;
        return this.data.shift();
    },

    display() {
        console.log(this.data.map(item => item.value).join(" => "));
    }
};


linkedList.enqueue({ value: 1 });
linkedList.enqueue({ value: 2 });
linkedList.enqueue({ value: 3 });
linkedList.enqueue({ value: 5 });

linkedList.push({ value: 7 });

// linkedList.insertAt(1, { value: 2 });

linkedList.display();


linkedList.dequeue();
linkedList.pop();

linkedList.display();


console.log(linkedList.remove(10));

