import { BehaviorSubject, Observable } from 'rxjs';

export class StorageService {
  private storage: Storage;
  private subjects: Map<string, BehaviorSubject<any>>;

  constructor(storage: Storage) {
    this.storage = storage;
    this.subjects = new Map<string, BehaviorSubject<any>>();
  }

  watch(key: string): Observable<any> {
    if (!this.subjects.has(key)) {
      this.subjects.set(key, new BehaviorSubject<any>(null));
    }
    let item = this.storage.getItem(key);
    if (item === 'undefined') {
      item = undefined;
    } else {
      item = JSON.parse(item);
    }
    this.subjects.get(key).next(item);
    return this.subjects.get(key).asObservable();
  }

  get(key: string): any {
    let item = this.storage.getItem(key);
    if (item === 'undefined') {
      item = undefined;
    } else {
      item = JSON.parse(item);
    }
    return item;
  }

  set(key: string, value: any) {
    let items = [];
    if (!this.storage.getItem(key)) {
      items.push(value);
      this.storage.setItem(key, JSON.stringify(items));
    } else {
      // Write recent item at top, duplicate logic and array here
      items = JSON.parse(this.storage.getItem(key));
      items.unshift(value);

      const seen = new Set();

      // @ts-ignore
      items = items.filter(el => {
      const duplicate = seen.has(el.id);
      seen.add(el.Code);
      return !duplicate;
      });

      this.storage.setItem(key, JSON.stringify(items));
    }
    if (!this.subjects.has(key)) {
      this.subjects.set(key, new BehaviorSubject<any>(items));
    } else {
      this.subjects.get(key).next(items);
    }
  }

  deleteItemById(key: any, id: any) {
    let items = [];
    if (this.storage.getItem(key)) {
      items = JSON.parse(this.storage.getItem(key));
      items = items.filter(n => n.id !== id);
      this.storage.setItem(key, JSON.stringify(items));
      this.subjects.get(key).next(items);
    }
  }

   clear() {
    this.storage.clear();
    this.subjects.clear();
  }
}
