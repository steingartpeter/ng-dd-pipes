import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType:'cel'|'fah',outputType?:'cel'|'fah'):string  {
    let val: number;

    if(!value){
      return '';
    }

    if(typeof(value) === 'string'){
      val = parseFloat(value);
    }else{
      val = value;
    }

    let outputTemp: number;
    if(inputType === 'cel' && outputType === 'fah'){
      outputTemp = val * (5 / 9) + 32;
    }else if(inputType === 'fah' && outputType === 'cel'){
      outputTemp = (val-32) * (5 / 9);
    }else{
      outputTemp = val;
    }

    let symbol:'°C'|'°F';
    if(!outputType){
      symbol = inputType === 'cel' ? '°C':'°F';
    }else{
      symbol = inputType === 'cel' ? '°C':'°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
