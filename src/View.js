const View =  {
    render: ({minutes, seconds}) => document.body.innerHTML = `
        <p>Próximo post em</p>
        <span>${minutes}:${seconds}</span>
    `
}

export { View }