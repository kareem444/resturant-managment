import { ILocalDBDataWithId, ILocalDBDataWithoutId, ILocalDBGetOptionsProperties, IOperator } from "./LocalDBInterface";
import {
    handelLocalDBWhereCondition,
} from "./LocalDBService";

export class LocalDB {
    private request: IDBOpenDBRequest | undefined = undefined;
    private db: IDBDatabase | undefined = undefined;

    constructor(dbName: string, collections: string[], version: number = 1) {
        this.init(dbName, collections, version);
    }

    private async init(
        dbName: string,
        collections: string[],
        version: number = 1
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.request = indexedDB.open(dbName, version);

            this.request.onupgradeneeded = () => {
                this.db = this.request?.result;

                collections.forEach((objectStore) => {
                    if (!this.db?.objectStoreNames.contains(objectStore)) {
                        this.db?.createObjectStore(objectStore, { keyPath: "id" });
                    }
                });
            };

            this.request.onsuccess = () => {
                this.db = this.request?.result;
                version = this.db?.version || 1;
                resolve(true);
            };

            this.request.onerror = (e: any) => {
                reject(e.target.error);
            };
        });
    }

    public async add(
        collection: string,
        data: ILocalDBDataWithId,
        updateIfKeyExist: boolean = false
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readwrite");
            const store = transaction?.objectStore(collection);
            let request;

            if (updateIfKeyExist) {
                request = store?.put(data);
            } else {
                request = store?.add(data);
            }

            if (request) {
                request.onsuccess = () => {
                    resolve(true);
                };

                request.onerror = (e: any) => {
                    reject(e.target.error);
                };
            }
        });
    }

    public async update(
        collection: string,
        id: string | number,
        data: ILocalDBDataWithoutId,
        addIfNotExist: boolean = false
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readwrite");
            const store = transaction?.objectStore(collection);

            const putData = () => {
                const request = store?.put({ id, ...data });

                if (request) {
                    request.onsuccess = () => {
                        resolve(true);
                    };

                    request.onerror = (e: any) => {
                        reject(e.target.error);
                    };
                }
            };

            if (addIfNotExist) {
                putData();
            } else {
                const getRequest = store?.get(id);
                if (getRequest) {
                    getRequest.onsuccess = () => {
                        if (getRequest.result) {
                            putData();
                        } else {
                            reject("Key not found");
                        }
                    };

                    getRequest.onerror = (e: any) => {
                        reject(e.target.error);
                    };
                }
            }
        });
    }

    public async getOne(
        collection: string,
        [key, operator, value]: [string, IOperator, any]
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readonly");
            const store = transaction?.objectStore(collection);

            const request = store?.openCursor();

            if (request) {
                request.onsuccess = (e: any) => {
                    const cursor: IDBCursorWithValue | null = e.target.result;
                    handelLocalDBWhereCondition(cursor, key, operator, value, resolve);
                };

                request.onerror = (e: any) => {
                    reject(e.target.error);
                };
            }
        });
    }

    public async getOneById(
        collection: string,
        id: string | number
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readonly");
            const store = transaction?.objectStore(collection);
            const request = store?.get(id);
            if (request) {
                request.onsuccess = () => {
                    resolve(request.result);
                };

                request.onerror = (e: any) => {
                    reject(e.target.error);
                };
            }
        });
    }

    public async get(
        collection: string,
        options?: ILocalDBGetOptionsProperties
    ): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readonly");
            const store = transaction?.objectStore(collection);

            if (options?.where) {
                const request = store?.openCursor();

                if (request) {
                    const array: any[] = []
                    request.onsuccess = async (e: any) => {
                        const cursor: IDBCursorWithValue | null = e.target.result;
                        if (cursor && options.where) {
                            const result = cursor.value
                            const [key, operator, value] = options.where;
                            if (operator === 'in' || operator === 'not in') {
                                if (Array.isArray(result[value])) {
                                    if (operator === 'in' && eval(`result[value].includes(key)`)) {
                                        array.push(result)
                                    } else if (
                                        operator === 'not in' &&
                                        eval(`!result[value].includes(key)`)
                                    ) {
                                        array.push(result)
                                    }
                                }
                            } else if (operator === 'like' || operator === 'not like') {
                                if (typeof result[key] === 'string') {
                                    if (operator === 'like' && eval(`result[key].includes(value)`)) {
                                        array.push(result)
                                    } else if (
                                        operator === 'not like' &&
                                        eval(`!result[key].includes(value)`)
                                    ) {
                                        array.push(result)
                                    }
                                }
                            } else if (eval(`'${result[key]}' ${operator} '${value}'`)) {
                                array.push(result)
                            }

                            if (options?.limit && array.length === options.limit) {
                                if (options?.orderBy) {
                                    const [key, order] = options.orderBy;
                                    const result = array.sort((a: any, b: any) => {
                                        if (order === "asc") {
                                            if (typeof a[key] === "string") {
                                                return a[key] > b[key] ? 1 : -1;
                                            }
                                            return a[key] - b[key];
                                        } else {
                                            if (typeof a[key] === "string") {
                                                return b[key] > a[key] ? 1 : -1;
                                            }
                                            return b[key] - a[key];
                                        }
                                    });
                                    resolve(result);
                                    return;
                                }
                                resolve(array);
                                return;
                            }

                            cursor.continue()
                        } else {
                            if (options?.orderBy) {
                                const [key, order] = options.orderBy;
                                const result = array.sort((a: any, b: any) => {
                                    if (order === "asc") {
                                        if (typeof a[key] === "string") {
                                            return a[key] > b[key] ? 1 : -1;
                                        }
                                        return a[key] - b[key];
                                    } else {
                                        if (typeof a[key] === "string") {
                                            return b[key] > a[key] ? 1 : -1;
                                        }
                                        return b[key] - a[key];
                                    }
                                });
                                resolve(result);
                                return;
                            }
                            resolve(array);
                        }
                    };

                    request.onerror = (e: any) => {
                        reject(e.target.error);
                    };
                }
            } else {
                const request = store?.getAll(undefined, options?.limit);
                if (request) {
                    request.onsuccess = () => {
                        if (options?.orderBy) {
                            const [key, order] = options.orderBy;
                            const result = request.result.sort((a: any, b: any) => {
                                if (order === "asc") {
                                    if (typeof a[key] === "string") {
                                        return a[key] > b[key] ? 1 : -1;
                                    }
                                    return a[key] - b[key];
                                } else {
                                    if (typeof a[key] === "string") {
                                        return b[key] > a[key] ? 1 : -1;
                                    }
                                    return b[key] - a[key];
                                }
                            });

                            resolve(result);
                        } else {
                            resolve(request.result);
                        }
                    };

                    request.onerror = (e: any) => {
                        reject(e.target.error);
                    };
                }
            }
        });
    }

    public async deleteById(
        collection: string,
        id: string | number
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readwrite");
            const store = transaction?.objectStore(collection);
            const request = store?.delete(id);

            if (request) {
                request.onsuccess = () => {
                    resolve(true);
                };

                request.onerror = (e: any) => {
                    reject(e.target.error);
                };
            }
        });
    }

    public async deleteAll(collection: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const transaction = this.db?.transaction(collection, "readwrite");
            const store = transaction?.objectStore(collection);
            const request = store?.clear();

            if (request) {
                request.onsuccess = () => {
                    resolve(true);
                };

                request.onerror = (e: any) => {
                    reject(e.target.error);
                };
            }
        });
    }

    public async close(): Promise<boolean> {
        return new Promise((resolve) => {
            this.db?.close();

            resolve(true);
        });
    }

    public async deleteDB(dbName: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.deleteDatabase(dbName);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = (e: any) => {
                reject(e.target.error);
            };
        });
    }
}
