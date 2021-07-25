import React, { useState, useEffect } from "react";

import * as S from './styled';
import * as Type from './../../types';
import Client from './../Client/Client';
import * as api from '../../data/api';

export default function Clients() {

    let clientsData: Type.Clients = api.get('clients');
    let data = clientsData || [];
    
    const initialAddressValues: Type.Address = {
        street: '',
        number: 0,
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        country: ''
    }

    const initialClientValues:Type.Client = {
        id: '',
        name: '',
        email: '',
        mobil: '',
        bornDay: '',
        address: {...initialAddressValues}
    };
    
    const [clients, setClients] = useState(data);
    const [currentClient, setCurrentClient]= useState(initialClientValues);

    useEffect(() => {
        api.set( 'clients', clients );
    }, [clients])

    function handleSetClient( clientToUpdate: Type.Client ): void {

        let updateClients: Type.Clients = [...clients];
        let isRegistered: boolean = false;
        
        if ( clients.length > 0 ) {
            updateClients.forEach((client, index) => {
                if (client.id === clientToUpdate.id) {
                    updateClients[index] = {...clientToUpdate};
                    isRegistered = true;
                }
            });
        }
        
        if(!isRegistered) {
            updateClients.push(clientToUpdate);  
        }
        
        setClients(updateClients);
    }

    function handleChangeForm(e: any): void {
        let id = e.target.getAttribute('data-id');

        if ( e.target.tagName !== 'LI' ) {
            id = e.target.parentNode.getAttribute('data-id');
        }
        
        clients.forEach((showClient: Type.Client) => {
            if (showClient.id === id) {
                setCurrentClient(showClient);
            }
        })
    }

    function handleDeleteClient(clientId: string): void{
        let updateClients: Type.Clients = [...clients];
        let toDelete: boolean | number = false;

        updateClients.forEach((client, index) => {
            if (client.id === clientId) {
                toDelete = index;
            }
        });
            
        if ( typeof toDelete === 'number' ) {
            updateClients.splice(toDelete, 1);
            setClients(updateClients);
        }
    }

    return (
        <>
            <S.List>
                <S.H1>Clientes</S.H1>
                <S.UlHeader>
                    <S.Span>Nome</S.Span>
                    <S.Span>E-mail</S.Span>
                </S.UlHeader>
                <S.Ul>                
                    {clients.length > 0 ? clients.map((client: Type.Client, index: number) => (
                        <S.Li 
                            key={index} 
                            data-id={client.id} 
                            onClick={handleChangeForm}
                        >
                            <S.Span>{client.name}</S.Span>
                            <S.Span>{client.email}</S.Span>
                            <S.ButtonSelect>Selecionar</S.ButtonSelect>
                        </S.Li>
                    )) : <S.NoData>Nenhum cliente foi encontrado.</S.NoData>}
                </S.Ul>
            </S.List>
            <S.Aside>
                <Client 
                    currentClient={currentClient} 
                    onSubmitClient={ handleSetClient } 
                    handleDeleteClient={ handleDeleteClient }
                />
            </S.Aside>
        </>
    )
}