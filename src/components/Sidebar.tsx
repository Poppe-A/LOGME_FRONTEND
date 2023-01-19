import { UserFriends as UserFriendsIcon } from '@styled-icons/fa-solid/UserFriends';
import { InfoCircle as InfoCircleIcon } from '@styled-icons/fa-solid/InfoCircle';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colours } from '../constants/colours';

const Container = styled.nav<IProps>`
    grid-area: sidebar;
    background-color: ${colours.grey};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    min-width: 200px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 0px;
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    text-transform: capitalize;
    text-decoration: none;
    border-left: solid 5px ${colours.grey};
    color: ${colours.primary};
    font-size: 1rem;
    font-weight: bold;

    &.active {
        background-color: white;
        border-left: solid 5px ${colours.secondary};
    }

    /* List Item Icon */
    svg {
        height: 1em;
        width: 1em;
        margin-right: 1rem;
    }
`;

interface IProps {}

const Sidebar: React.FC<IProps> = () => (
    <Container data-testing="sidebar">
        <SidebarList>
            <li>
                <StyledNavLink to="/">
                    <UserFriendsIcon />
                    Counter
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/about">
                    <InfoCircleIcon />
                    About
                </StyledNavLink>
            </li>
        </SidebarList>
    </Container>
);

export default Sidebar;
