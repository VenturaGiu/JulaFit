import styled from "styled-components/native";

export const Container = styled.TextInput`
    width: 80%;
    height: 45px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND };
    color: black;
    padding: 0 16px;
    border-radius: 15px;
`;