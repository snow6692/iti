let helper = {
    getSetGen: function () {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                let cap = key.charAt(0).toUpperCase() + key.slice(1);

                this["get" + cap] = function () {
                    return this[key];
                }.bind(this);

                this["set" + cap] = function (value) {
                    this[key] = value;
                }.bind(this);
            }
        }
    }
};

let user = { name: "Ali", age: 10 };
helper.getSetGen.call(user);

user.setName("Ahmed");
console.log(user.getName());