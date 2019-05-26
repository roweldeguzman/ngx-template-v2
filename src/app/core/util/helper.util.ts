import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})

export class HelperUtil {
  constructor() {}
  /**
	 * 
	 * @param needle	string
	 * @param haystack 	array
	 * 
	 * @returns boolean
	 */
  public in_array(needle: any, haystack: any){
    for(var i in haystack) {
      if(haystack[i] == needle) return true;
    }
    return false;
  }
  
  /**
   * 
   * @param parentNode string the parent tag/class/id you are looking for
   * @param childNode any html event target e.i event.target
   * @param type string tag/id/class
   */
  public getParent(parentNode: string, childNode: any, type: string) {
		var obj = childNode.parentNode;
		if (type == 'tag' || type == null) {
			while (obj.tagName != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'id') {
			while (obj.id != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'class') {
			while (obj.classList.contains(parentNode) === false) {
				obj = obj.parentNode;
			}
		}
		return obj;
  }

  public sideToggle(target: any, duration = 500) {
    
    let slideUp = (target: any, duration=500) => {
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.boxSizing = 'border-box';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    }
  
    let slideDown = (target: any, duration=500) => {
      target.style.removeProperty('display');
      let display = window.getComputedStyle(target).display;
  
      if (display === 'none')
        display = 'block';
  
      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.boxSizing = 'border-box';
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
    }

    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
    
  }
  
}