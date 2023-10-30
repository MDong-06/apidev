exports.name = '/images/cu';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/cu.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}