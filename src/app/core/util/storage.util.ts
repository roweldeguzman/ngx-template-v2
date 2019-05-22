import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})

export class StorageUtil {

  public add(name: string, data: object) {
    if (this.isExist(name)) { 
      this.delete(name);
    }

		localStorage.setItem(name, JSON.stringify(data));
  }

  public get(name: string){ 
    try {
      return JSON.parse(localStorage.getItem(name));
    }
		catch (e) { 
      return '';
    }
  }

  public delete(name: string) {
    if (this.isExist(name)) 
      localStorage.removeItem(name);
  }

  public isExist(name: string) {
    let item = localStorage.getItem(name);

		if (item !== null) return true;
    
    return false;
  }


}