import { Injectable, Inject } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class SessionStorageService extends StorageService {

    // @ts-ignore
    constructor(@Inject('Window') private readonly _window: any) {
        super(_window.sessionStorage);
    }
}
