export default function print() {
    console.log('집가고싶다...');
}

export default function executable(DELAY) {
    let startTime = -new Date();

    return function () {
        if (new Date() - startTime > DELAY) {
            startTime = new Date();

            return true;
        }
    };
}