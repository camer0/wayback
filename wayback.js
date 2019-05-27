let request = require('request')
var wayback = require('wayback-machine');

module.exports = async function (page, options) {
    options = options || {};
    let max_attempts = (options && options.attempts) || 10
    let interval = options.interval || 5000
    return new Promise((resolve, reject) => {
        let prevDate;
        wayback.getClosest(page, function (err, closest) {
            if (err) return reject(err);
            prevDate = closest.timestamp || "NOTFOUND"
            request("http://web.archive.org/save/" + page, function (err, response, body) {
                if (err != null) throw err;
                else checkPage();
            });
        });
        let attempts = 0;
        function checkPage() {
            attempts++
            if (attempts === max_attempts) reject("Unable to save URL.")
            setTimeout(function () {
                wayback.getClosest(page, function (err, closest) {
                    if (err) reject(err);
                    let curDate = closest.timestamp || "NOTFOUND"
                    if (curDate !== prevDate) resolve(closest.url)
                    else checkPage()
                });
            }, interval);
        }
    })
}
