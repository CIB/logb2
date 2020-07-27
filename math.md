data Nat = Zero |
    struct Succ
        of: Nat

// Axioms of induction for defined struct:
 
let p: (Nat) -> Statement
if
    p(Zero)
    p(n) implies p(Succ(of: n)) forall n: Nat
then
    p(n) for all n: Nat


// Axioms of induction applied to a binary statement

// To prove:
forall n
    forall m
        p(n, m)

let p2 = n -> p(n, m) forall m

if
    p2(Zero)
    p2(n) implies p2(Succ(of: n)) forall n: Nat
then
    p2(n) forall n: Nat

To prove:
p2(Zero)
p(Zero, m) forall m

// Next:
p2(n) implies p2(Succ(of: n)) forall n: Nat
(p(n, m) forall m) implies (p(Succ(of: n), m) forall m) forall n

To prove, overall:

p(Zero, Zero)
p(Zero, m) implies p(Zero, Succ(of: m))
p(n, m) implies p(Succ(of: n), m) forall m, n

// Induction on function definitions

is_defined_function(f, domain, range) when
    is_relation(f, domain, range)
    exists y in range with f(x) = y forall x in domain

// When domain is an inductive struct type
// to prove

exists y in range with f(Zero) = y
exists y in range with f(n) = y implies exists y in range with f(Succ(n)) = y forall n: Nat

Now we can define a function:
f(Zero) = Succ(0)
f(n) = y implies f(Succ(n)) = Succ(y)
// And a different way to write that
f(Succ(n)) = Succ(f(n))

0 + 0 = 0
0 + m = m
n + 0 = n


def 0 = Zero
def succ(x: Nat) = Succ (of: x)
def 1 = succ(0)

def +(x: Nat, y: Nat) -> z: Nat where
    x + 0 = x
    0 + y = y
    x + succ(y) = succ(x + y)

def *(x: Nat, y: Nat) -> z: Nat where
    x * Zero = Zero
    Zero * y = y
    x * (y + 1) = (x * y) + x
    x * (y + 1) = (x * y) + x

def -(x: Nat, y: Nat) -> z: Nat where
    y + z = x

def /(x: Nat, y: Nat) -> z: Nat where
    y * z = x

def ^(x: Nat, y: Nat) -> z: Nat where
    x ^ 0 = x
    x ^ (y + 1) = (x ^ y) * x