import React, { useState, useEffect } from "react";

import * as S from './styled';
import * as Type from './../../types';
import Product from './../Product/Product';
import * as api from '../../data/api';

export default function Products() {

    let productsData: Type.Products = api.get('products');
    let data = productsData || [];
    
    const initialProductValues:Type.Product = {
        id: '',
        name: '',
        description: '',
        price: '',
        category: '',
    };
    
    const [products, setProducts] = useState(data);
    const [currentProduct, setCurrentProduct]= useState(initialProductValues);

    useEffect(() => {
        api.set( 'products', products );
    }, [products])

    function handleSetProduct( productToUpdate: Type.Product ): void {

        let updateProducts: Type.Products = [...products];
        let isRegistered: boolean = false;
        
        if ( products.length > 0 ) {
            updateProducts.forEach((product, index) => {
                if (product.id === productToUpdate.id) {
                    updateProducts[index] = {...productToUpdate};
                    isRegistered = true;
                }
            });
        }
        
        if(!isRegistered) {
            updateProducts.push(productToUpdate);  
        }
        
        setProducts(updateProducts);
    }

    function handleChangeForm(e: any): void {
        let id = e.target.getAttribute('data-id');
        
        if ( e.target.tagName !== 'LI' ) {
            id = e.target.parentNode.getAttribute('data-id');
        }

        products.forEach((showProduct: Type.Product) => {
            if (showProduct.id === id) {
                setCurrentProduct(showProduct);
            }
        })
    }

    function handleDeleteProduct(productId: string): void{
        let updateProducts: Type.Products = [...products];
        let toDelete: boolean | number = false;

        updateProducts.forEach((product, index) => {
            if (product.id === productId) {
                toDelete = index;
            }
        });
            
        if ( typeof toDelete === 'number' ) {
            updateProducts.splice(toDelete, 1);
            setProducts(updateProducts);
        }
    }

    function getCategoryName(id: string | null): string | null{
        const categories = [
            {id: 'apps', name: 'Aplicativo'},
            {id: 'courses', name: 'Curso'},
            {id: 'books', name: 'Livro'},
        ];

        let response = categories.filter(category => {
            return category.id === id;
        });

        if ( response.length === 0 ) return null;

        return response[0].name;        
    }

    return (
        <>
            <S.List>
                <S.H1>Treinamentos</S.H1>
                <S.UlHeader>
                    <S.Span>Nome</S.Span>
                    <S.Span>Categoria</S.Span>
                </S.UlHeader>
                <S.Ul>                
                    {products.length > 0 ? products.map((product: Type.Product, index: number) => (
                        <S.Li 
                            key={index} 
                            data-id={product.id} 
                            onClick={handleChangeForm}
                        >
                            <S.Span>{product.name}</S.Span>
                            <S.Span>{getCategoryName(product.category)}</S.Span>
                            <S.ButtonSelect>Selecionar</S.ButtonSelect>
                        </S.Li>
                    )) : <S.NoData>Nenhum treinamento encontrado.</S.NoData>}
                </S.Ul>
            </S.List>
            <S.Aside>
                <Product 
                    currentProduct={currentProduct} 
                    onSubmitProduct={ handleSetProduct } 
                    handleDeleteProduct={ handleDeleteProduct }
                />
            </S.Aside>
        </>
    )
}