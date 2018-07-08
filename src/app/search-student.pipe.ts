import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStudent'
})
export class SearchStudentPipe implements PipeTransform {

  transform(value: any, args?: any): any {

if(!args){
  return value;
}else{
  args;
}
return value.filter(n=>{
  return n.name.startsWith(args)==true;
})
  }

}
