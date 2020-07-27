export type Value = Constructor | Function | Eval | Variable

export class Constructor {
    public name: string
    public operands: { [key: string]: Value }
}

export class Eval {
    public function: Value
    public operands: Value[]
}

export class Variable {
    public name: string
}

export class Statement {
    public relation: string
    public operands: Value[]
}

export class Proof {
    public statements: Statement[]
}
