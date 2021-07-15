//static function calls and no function reuse
function tenSquared(){
    return 10*10;
}

const tenSquare = tenSquared()

console.log("tenSquared",tenSquare)