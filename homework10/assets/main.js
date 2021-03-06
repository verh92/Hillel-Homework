function calc(val) {
    return {
        plus: function(num) {
            val += num;
        },
        min: function(num) {
            val -= num;
        },
        div: function(num) {
            val /= num;
        },
        mult: function(num) {
            val *= num;
        },
        getRes: function() {
        return val;
        }
    }
};

const first = calc(14);

first.plus(23);
first.min(12);
first.div(2);
first.mult(4);
console.log(first.getRes());