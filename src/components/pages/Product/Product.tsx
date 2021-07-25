import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import * as S from './styled';

export default function Product(props: any) {

    const [product, setProduct] = useState(props.currentProduct);

    function handleProductInput(e: any): void {
        const id: string = e.target.getAttribute('id');
        const value: string = e.target.value;

        let input:object = { [id]: value, };

        setProduct({ ...product, ...input });
    }

    function handleSubmit(e: any): void {
        e.preventDefault();

        props.onSubmitProduct({
            ...product,
            id: product.id !== '' ? product.id : uuidv4(),
        });
    }

    function handleNewProduct(): void {
        setProduct({id: uuidv4(), category: ''});
    }

    useEffect(() => {
        setProduct(props.currentProduct);
    }, [props.currentProduct]);

    const categories = [
        {id: 'apps', name: 'Aplicativo'},
        {id: 'courses', name: 'Curso'},
        {id: 'books', name: 'Livro'},
    ];

    return (
        <>
            <S.H1>Treinamento <S.ButtonNew onClick={handleNewProduct}>Adicionar</S.ButtonNew></S.H1>

            <form onSubmit={handleSubmit}>
                <S.Fieldset>
                    <S.Label htmlFor="name">Nome</S.Label>
                    <S.Input id="name" type="text" value={product.name || ''} onChange={handleProductInput} />
                </S.Fieldset>
                <S.Fieldset>
                    <S.Label htmlFor="category">Categoria</S.Label>
                    <S.Select id="category" value={product.category} onChange={handleProductInput}>
                        <option value="" disabled></option>
                        {
                            categories.map((category, index) => (  
                                <option 
                                    key={index}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))
                        }
                    </S.Select>
                </S.Fieldset>
                <S.Fieldset>
                    <S.Label htmlFor="description">Descrição</S.Label>
                    <S.Input id="description" type="text" value={product.description || ''} onChange={handleProductInput} />
                </S.Fieldset>
                <S.Fieldset>
                    <S.Label htmlFor="price">Preço atual</S.Label>
                    <S.Input id="price" type="text" value={product.price || ''} onChange={handleProductInput} />
                </S.Fieldset>
                <S.ButtonContainer>
                    <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
                    { !product.name ? '' : <S.ButtonDelete type="button" onClick={() => props.handleDeleteProduct(product.id)}>Apagar</S.ButtonDelete> }
                </S.ButtonContainer>
            </form>
        </>
    )
}