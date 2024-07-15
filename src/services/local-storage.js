class LocalStorageService {
  static tokenUpdatedEvent = new CustomEvent('tokenUpdated', { detail: {} }) 

  static getItem(key) {
    if (typeof key !== 'string') {
        key = JSON.stringify(key);
      }
      return localStorage.getItem(key);
  }
  
  static setItem(key, value) {
    if (typeof key !== 'string') {
      key = JSON.stringify(key);
    }
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  static removeItem(key) {
    if (typeof key !== 'string') {
      key = JSON.stringify(key);
    }
    localStorage.removeItem(key);
  }

  static clearItems() {
    localStorage.clear();
  }
}

export default LocalStorageService;