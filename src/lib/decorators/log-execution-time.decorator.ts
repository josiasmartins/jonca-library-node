export function LogExecutionTime() {
    return function(
        target: any,
        propertyKey: string,
        description: PropertyDescriptor
    ) {
        const methodOriginal = description.value;

        description.value = function(...args: any[]) {
            const t1 = performance.now();
            const returno = methodOriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000}`);
            returno;
        }

        return description;
    }
}