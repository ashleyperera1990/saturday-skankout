import {Injectable} from '@angular/core';
import {DJS} from '../../data/resident-djs';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DjService {


    getAllDJs() {
        return of(DJS);
    }

    getDjById(id: number) {
        return of(DJS.find(dj => dj.id === id));
    }
}
