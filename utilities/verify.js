// Request verification function
// Return true if request body has token key include
const verifyRequest = (req) => {
    if(req.body.token) {
        return true
    } else {
        return false;
    }
};

module.exports = verifyRequest;