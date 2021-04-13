// ==================== enum
enum Members {
    Simple,
    Standart,
    Premium,
}

const membership = Members.Standart
const membershipReverse = Members[2]
console.dir(membership)
console.dir(membershipReverse)