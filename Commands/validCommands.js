export function isValidCommand(command) {
    const validCommands = ['pause', 'ping', 'play', 'queue', 'skip', 'stop']

    if(!validCommands.includes(command)){
        return false
    }
    return true
}