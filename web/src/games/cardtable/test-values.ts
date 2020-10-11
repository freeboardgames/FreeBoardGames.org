const cnMove = {
    from: { container: "hands.north.held", ordinal: 0 },
    to: { container: "hands.east.private", ordinal: 0 }
}

const csMove = {
    from: { container: "hands.south.held", ordinal: 0 },
    to: { container: "hands.east.private", ordinal: 0 }
}

const pnMove = {
    from: { container: "hands.north.held", ordinal: 0 },
    to: { container: "hands.north.played", ordinal: 0 }
}

const psMove = {
    from: { container: "hands.south.held", ordinal: 0 },
    to: { container: "hands.south.played", ordinal: 0 }
}

const tCrib = {
    container: "hands.east.private", ordinal: 1
}

const rpSMove = {
    from: { container: "hands.south.played", ordinal: 0 },
    to: { container: "hands.south.held", ordinal: 53 },
}

export default tCrib;