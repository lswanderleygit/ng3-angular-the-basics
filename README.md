# Conceitos
**declarations**: sempre que criamos um component 
precisamos registrá-lo (declarar) no módulo.

**imports**: importamos os módulos da nosssa aplicação, podemos ter mais de um módulo, o próprio angular é dividido em vários módulos e conforme precisamos nós os importamos.

**providers**: 

## Comunicação

### **databinding communication**: comunicação entre typescript <-> HTML 
___
**Output** = Typescript -> HTML

**string interpolation**: ({{ data }})

**property binding**: ([property]="data")
___
### **Eventos** = HTML -> Typescript

**event binding**: ((event)="expression")

---
**Two-way-binding**: ([ngModel]="data")


# Comandos

### Criar um componente
```ng g c servers```

