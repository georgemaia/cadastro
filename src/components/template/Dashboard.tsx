import React, { useState } from 'react';

import Clients from '../pages/Clients/Clients';
import Products from '../pages/Products/Products';
import * as S from './styled';

const pages = [
    { id: 'clients', module: <Clients /> },
    { id: 'products', module: <Products /> },
];

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState('clients');

    function getCurrentPage(pageId: string){
        let showPage = pages[0].module;
        
        pages.forEach((page) => {
            if(page.id === pageId) {
                showPage = page.module;
            }
        })

        return showPage;
    }

    function getNavButton(id: string, name: string, checked: boolean, index: number) {

        if ( !checked ) {
            return (<S.Li key={index}><S.A onClick={() => setCurrentPage(id)}>{name}</S.A></S.Li>)
        }

        return (<S.LiActive key={index}><S.A onClick={() => setCurrentPage(id)}>{name}</S.A></S.LiActive>);
        
    }

    const buttons = [
        {id: 'clients', name: 'Clientes'},
        {id: 'products', name: 'Treinamentos'},
    ];


    return (
        <S.Main>
            <S.Nav>
                <S.Logo href="!#">
                    <S.Image src="/logo.png" />
                    Cadastros
                </S.Logo>
                <S.Ul>
                    {buttons.map((button, index) => (
                        getNavButton(button.id, button.name, button.id === currentPage, index)
                    ))}
                </S.Ul>
                <S.UlSocial>
                    <S.LiSocial><S.ASocial href="https://www.linkedin.com/in/georgemaia/" target="_blank"><S.ImageSocial src="/linkedin.svg" /></S.ASocial></S.LiSocial>
                    <S.LiSocial><S.ASocial href="https://github.com/georgemaia/" target="_blank"><S.ImageSocial src="/github.svg" /></S.ASocial></S.LiSocial>
                </S.UlSocial>
            </S.Nav>
            
            <S.Section>
                {getCurrentPage(currentPage)}
            </S.Section>
        </S.Main>
    );
}