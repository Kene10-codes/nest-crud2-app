import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
   const nameToString =  value.name.toString()
   
   if(!isNaN(nameToString)) {
    throw new HttpException("Name is not a string", HttpStatus.NOT_ACCEPTABLE)
   } else {
      return {...value, name: nameToString}
   }
  }
}
