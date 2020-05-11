begin axioms

type Nat

def +(x: Nat, y: Nat) -> z: Nat

end axioms

def *(x: Nat, y: Nat) -> z: Nat where
    x * 0 = 0
    x * (y + 1) = (x * y) + x

def -(x: Nat, y: Nat) -> z: Nat where
    y + z = x

def /(x: Nat, y: Nat) -> z: Nat where
    y * z = x

def ^(x: Nat, y: Nat) -> z: Nat where
    x ^ 0 = x
    x ^ (y + 1) = (x ^ y) * x