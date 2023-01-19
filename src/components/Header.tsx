import { useTranslation } from 'react-i18next';
import React from 'react';
import styled from 'styled-components';

import { colours } from '../constants/colours';

const Container = styled.header`
    grid-area: header;
    background-color: #3a529c;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
    color: ${colours.white};
`;

const Header: React.FunctionComponent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async (lng: string) => {
        await i18n.changeLanguage(lng);
    };

    return (
        <Container data-testid="header">
            <Title>{t('header.title')}</Title>
            <button type="button" onClick={() => changeLanguage('en')} data-testid="lang_en">
                en
            </button>
            <button type="button" onClick={() => changeLanguage('fr')} data-testid="lang_fr">
                fr
            </button>
        </Container>
    );
};

export default Header;
