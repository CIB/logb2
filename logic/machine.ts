class IncrementalStatementMachine {
    statements: Statement[]
    constructions: Construction[]
    blocks: Block[]
}

interface DataType {
    symbol: string
}

abstract class ValueExpression {
    readonly type: string
}

class BaseConstructorExpression {
    readonly type = 'BaseConstructor'
    symbol: string
}

class CompositeConstructorExpression {
    readonly type = 'CompositeConstructor'
    symbol: string
    parameters: ValueExpression[]
}

class Relation {
    symbol: string
    parameters: DataType[]

    arity(): number {
        return this.parameters.length
    }
}

interface Statement {
    relation: Relation
    arguments: ValueExpression[]
}