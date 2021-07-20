import styled from 'styled-components';

export const Layout = styled.div`
  top:8%;
  position: center;
  background-color: #FFFFFF;
  position: absolute;
  width: 70%;
  left: 15%;
  height: 86%;
  padding-top:5%;
    &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  margin: 0 10% 10% 10%;
  border : 1px solid #ddd;
  border-bottom: none;
`;

export const ListDetailGroup = styled.ul`
  list-style-type:none;
  padding:0;
  margin:0;
  text-align: center;
  .li{
    padding:8px 16px;
  }
`;

export const ListDetail = styled.li`
padding: 20px;
  border-bottom: 1px solid #ddd;
  min-height: 60px ;
  text-transform: capitalize;
`;
export const ListHeader = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
export const TextName = styled.div`
  font-size: 25px;
  font-weight: bold;
  color:#696969;
  text-transform: uppercase;
`;

export const TextId = styled.div`
  font-size: 15px;
  color:#696969;
`;

export const TextSubject = styled.div`
  font-size: 15px;
  font-weight: bold;
`;



