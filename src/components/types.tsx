export type Address = {
    street: string,
    number: number,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    country: string
};

export type Client = {
    id: string | null,
    name: string,
    email: string,
    mobil: string,
    bornDay: string,
    address: Address
};

export type Clients = Array<Client>;

export type Product = {
    id: string | null,
    name: string,
    description: string,
    price: string | null,
    category: string | null,
}

export type Products = Array<Product>;