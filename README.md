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


## Diretivas

O que são diretivas? São instruções na DOM.

Por exemplo queremos dizer a um determinado elemento que queremos que ele tenha o background verde.

```
<p appTurnGreen>Receives a green background"</p>

@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
  ...
}
```

# Comandos

### Criar um componente
```ng g c servers```

