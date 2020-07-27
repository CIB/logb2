data List of T =
    Nil |
    struct Head
        head: T
        tail: list of T

def length(l: list of T) where
    length(Nil) = 0
    length(Head x y) = length(y) + 1

def ++(l: list of T, m: list of T) where
    Nil ++ m = Nil
    (Head x y) ++ m = Head x (y ++ m)

proof
=====

l ++ Nil = l
    Nil ++ Nil = Nil
    (Head x y) ++ Nil = Head x (y ++ Nil)