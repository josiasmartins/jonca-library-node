export function DefaultValueV2(value: string | number | boolean) {
    return (target: any, property: string) => {
      const descriptor: PropertyDescriptor = {
        get() {
          // Verificação simplificada de undefined/null para ganho de desempenho potencial
          return this[property] ?? value;
        },
        set(newValue) {
          this[property] = newValue; // Atribuir diretamente para evitar verificações redundantes
        },
        configurable: true,
      };
  
      Object.defineProperty(target, property, descriptor);
    };
  }