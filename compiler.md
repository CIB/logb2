type Instruction = Write | Read | Add | Multiply

world Computer as
    memorySize: Int
    state as
        memory: list of Int
        programCounter: Int

        0 <= programCounter < memorySize - 4
        sizeOf memory = memorySize
        for e in memory
            0 <= e < 2^32
    transitions as
        nextInstruction

data Write {
    value: Int
    register: Int
    address: Int
}

data Read {
    address: Int
    register: Int
}

def opCodes as
    NOOP = 0
    ADD = 1
    MULTIPLY = 2

def Computer.nextInstruction(base: state) -> result: state
    let instruction = base.memory[base.programCounter]
    if instruction = opCodes.MULTIPLY then
        let summand1Address = base.memory[base.programCounter + 1]
        let summand2Address = base.memory[base.programCounter + 2]
        let resultAddress = base.memory[base.programCounter + 3]
        
        result = base except
            result.memory[resultAddress] = result.memory[summand1Address] + result.memory[summand2Address]
    else
        result = base
    end

def program(instructions: Instruction[], parameters: Int[]) as
    instructions[]