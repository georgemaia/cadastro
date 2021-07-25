function getLocalStorage(){
    let storage = localStorage.getItem('store');

    if ( ! storage ) {
        let initialStructure = {
            clients: [],
            products: [],
        };
        localStorage.setItem( 'store', JSON.stringify(initialStructure) );
        return initialStructure;
    }

    return JSON.parse( storage );
}

export function get(endpoint: string): [] {
    let storage = getLocalStorage();
    return storage[endpoint];
}

export function set(endpoint: string, data: object): void {
    let storage = getLocalStorage();
    storage = {
        ...storage,
        [endpoint]: data,
    };
    localStorage.setItem( 'store', JSON.stringify(storage) );
}