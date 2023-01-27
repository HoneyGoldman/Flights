import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generic'
})
export class GenericPipe implements PipeTransform {

  transform(list: any[],textSearch: string,fieldName:string): any[] {
    let results:any[] = []
    if(textSearch==='') {
      return list
    }
    else{
      
      list.forEach(obj=>{
        if(obj[fieldName]?.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())){
          results.push(obj)
        }
      })
    }
    return results;
  }
  

}
