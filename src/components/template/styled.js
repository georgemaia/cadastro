import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: none;
    display: flex;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
`;

export const Nav = styled.nav`
    flex: 1;
    max-width: 160px;
    min-width: 160px;
    min-height: 100%;
    background-color: #37024B;
    display: flex;
    flex-direction: column;
    justify-contents: space-between;
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 32px 0;
    text-align: center;
`;

export const Image = styled.img`
    width: 80px;
    border-radius: 50%;
    margin-bottom: 12px;
`;

export const Ul = styled.ul`
    flex: 1;
    max-width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #5E047F;
`;

export const Li = styled.li`
    border-bottom: 1px solid #5E047F;
    transition: background-color .2s;
    
    &:hover {
        background-color: #270234;
    }
`;

export const LiActive = styled.li`
    border-bottom: 1px solid #5E047F;
    transition: background-color .2s;
    background-color: #270234;
`;

export const A = styled.a`
    display: block;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 12px 24px;
    cursor: pointer;
`;

export const UlSocial = styled.ul`
    flex: 1;
    max-width: 100%;
    min-width: 100%;
    max-height: 60px;
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #5E047F;
    display: flex;
    flex-direction: row;
`;

export const LiSocial = styled.li`
    flex: 1;
    max-width: 50%;
    border-bottom: 1px solid #5E047F;
    transition: background-color .2s;
    text-align: center;
    
    &:hover {
        background-color: #270234;
    }
`;

export const ASocial = styled.a`
    display: block;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 14px 24px 22px 24px;

    svg {
        fill: #ffffff;
    }
`;

export const ImageSocial = styled.img`
    width: 32px;
    height: 32px;
`;

export const Section = styled.section`
    background-color: #ffffff;
    width: calc(100% - 160px);
    display: flex;
    flex-direction: row;
`;
