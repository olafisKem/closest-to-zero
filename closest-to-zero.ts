
// ({}–>nil) no code at all->code that employs nil
// (nil->constant)
// (constant->constant+) a simple constant to a more complex constant
// (constant->scalar) replacing a constant with a variable or an argument
// (statement->statements) adding more unconditional statements.
// (unconditional->if) splitting the execution path
// (scalar->array)
// (array->container)
// (statement->recursion)
// (if->while)
// (expression->function) replacing an expression with a function or algorithm
// (variable->assignment) replacing the value of a variable.

//what about edgecases: negative numbers, string, 

export const closestToZero = (xs: number[]) => {
    if (xs.length === 0) {
      return null;
    }
    if (xs.length === 1) {
        return xs[0];
    };
   return xs[0] > xs[1] ? xs[1]: xs[0];
};