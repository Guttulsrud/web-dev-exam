import styled from "styled-components";

export const SearchWrapper = styled.div`
 position: relative;
 border-radius: 15px;
`

export const SearchInput = styled.input`
 position: relative;
 font-size: 2.2rem;
 padding: 20px;
 width: 100%;
 border-radius: 30px;
 border: none;
 padding-left: 20px;
 padding-right: 130px;
 margin: 0;
 box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
`

export const SearchButton = styled.button`
 position: absolute;
 background-color: transparent;
 background-image: url(search.svg);
 background-repeat: no-repeat;
 background-position: center;
 background-size: 24px;
 right: 20px;
 top: 16px;
 background-color: #FFFFFF;
 border-radius: 15px;
 border: 2px solid #0070D1;
 margin-top: 12px;
 padding-top: 24px;
 padding-bottom: 14px;
 width: 96px;
`
