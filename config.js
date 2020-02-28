const {
    PORT = 5500,
    MONGOLAB_URI,
} = process.env;

module.exports = {
    PORT: Number(PORT),
    MONGOLAB_URI
}