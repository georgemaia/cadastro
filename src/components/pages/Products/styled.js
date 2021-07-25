import styled from 'styled-components';

export const List = styled.div`
    flex: 1;
    min-width: 60%;
    min-width: 60%;
    padding: 30px;
`;

export const H1 = styled.h1`
    color: #37024B;
    font-weight: 700;
    margin: 0 0 30px 0;
`;

export const UlHeader = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    border-bottom: 4px solid #888888;
}`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #efefef;
`;

export const Li = styled.li`
    list-style: none;
    padding: 12px;
    border: 1px solid #efefef;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:nth-child(2n){
        background-color:#efefef;
    }
`;

export const Span = styled.span`
    flex: 1;
    &:nth-child(1) {
        max-width: 70%;
    }
    
    &:nth-child(3) {
        max-width: 125px;
    }
`;

export const ButtonSelect = styled.button`
    color: #444444;
    font-size: 1em;
    padding: 12px 24px;
    border-radius: 3px;
    border: none;
    background-color: #cccccc;
    cursor: pointer;
`;

export const Aside = styled.aside`
    width: 100%;
    background-color: #efefef;
    padding: 30px;
    overflow-y: auto;
`;

export const NoData = styled.li`
    list-style: none;
    padding: 12px;
    border: 1px solid #efefef;
    cursor: pointer;
    align-items: center;
`;