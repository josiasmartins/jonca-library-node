export function DefaultValue(value: string | number | boolean) {

    return (target, property: string) => {
        let origianalValue = target[property];

        const getter = () => {
            return (origianalValue !== undefined && origianalValue !== null) ? origianalValue : value;
        };

        const setter = (newValue) => {

            origianalValue = (origianalValue !== undefined && origianalValue !== null) ? origianalValue : value;

        }

        Object.defineProperty(target, property, {
            get: getter,
            set: setter,
            configurable: true
        });
        
    }

}