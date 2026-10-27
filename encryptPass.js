const crypto = require('crypto')
function convertPassword(password)
{
    const salt = crypto.randomBytes(64).toString('hex')
    const hash = crypto.scryptSync(password,salt,64).toString('hex')
    return hash.substring(0,10)
}
const orgPass = "Prashun@0"
const hashPass = convertPassword(orgPass)
console.log("Original Password : "+orgPass)
console.log("Encrypted Hash Password : "+hashPass)