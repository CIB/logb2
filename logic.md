def not(x: Bool) where
    not true = false
    not false = true

def and(x: Bool, y: Bool) where
    true and true = true
    otherwise x and y = false

def or(x: Bool, y: Bool) where
    x or y = not ((not x) and (not y))

def xor(x: Bool, y: Bool) where
    true xor false = true
    false xor true = true
    otherwise x xor y = false


proofs
======

x and y = y and x
    if x = true and y = true then
        x and y = true and true = y and x
    otherwise
        x and y = false = y and x

x or y = y or x
    x or y = not ((not x) and (not y)) = not ((not y) and (not x)) = y or x