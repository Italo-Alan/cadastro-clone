import styled from "styled-components";

export const ContainerTotal = styled.div`
    min-width: 100%;
    background: #1E192C;
    min-height: calc(100vh - 47px);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    color: #fff;
    width: 320px;
`
export const TitleLogin = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    color: #fff;
    width: 320px;
`
export const TitleLoginLitle = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    width: 320px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #fff;
    border: 0;
    flex: 1;
    height: 30px;
`