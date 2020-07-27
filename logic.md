data Bool = True | False

def not(x: Bool) where
    not True = False
    not False = True

def and(x: Bool, y: Bool) where
    True and True = True
    otherwise x and y = False

def or(x: Bool, y: Bool) where
    x or y = not ((not x) and (not y))

def xor(x: Bool, y: Bool) where
    True xor False = True
    False xor True = True
    otherwise x xor y = False


proofs
======

x and y = y and x
    if x = true and y = true then
        x and y = true and true = y and x
    otherwise
        x and y = false = y and x

x or y = y or x
    x or y = not ((not x) and (not y)) = not ((not y) and (not x)) = y or x