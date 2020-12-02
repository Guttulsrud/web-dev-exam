import styled from "styled-components";

export const SearchWrapper = styled.div`
 display: flex-wrap;
 align-items: center;
 border: none;
 background: rgb(0,112,209);
 background: linear-gradient(0deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
 padding-top: 30px;
 padding-left: 20px;
 padding-right: 20px;
 padding-bottom: 30px;
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
