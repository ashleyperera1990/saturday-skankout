import {Injectable} from '@angular/core';
import validate = WebAssembly.validate;

@Injectable({providedIn: 'root'})
export class StorageService {


    setItem(name: string, item: any) {
        localStorage.setItem(name, JSON.stringify(item));
    }

    getItem(name: string) {
        return JSON.parse(localStorage.getItem(name));
    }


}
