import localforage from 'localforage'

export default class CacheManager  {

    writeData = (key:string, data:any) => localforage.setItem(key, data);

    readData = (key:string) => localforage.getItem(key);

    removeData = (key:string) => localforage.removeItem(key);

    clear = () => localforage.clear();

}
