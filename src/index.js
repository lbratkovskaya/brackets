module.exports = function check(str, bracketsConfig) {
    let localStr = str;

    let prevStrLen = localStr.length + 1;

    while (localStr.length < prevStrLen) {
        prevStrLen = localStr.length;

        bracketsConfig.forEach(config => {

            console.log(config);

            localStr = localStr.split(config[0] + config[1]).join('');

            console.log(localStr);
        });
    }

    return localStr.length === 0;
}
