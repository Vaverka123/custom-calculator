export class Command {
    execute(prev, curr) {
        throw new Error('execute() must be implemented');
    }

    undo(result, curr) {
        throw new Error('undo() must be implemented');
    }
}