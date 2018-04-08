import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    name: string;
    label: string;
    active: boolean;
    to: string;
    onClick: (name: string) => void;
}

export const Tab = (props: Props) => (
    <Menu.Item
        name={props.name}
        content={props.label}
        active={props.active}
        as={Link}
        to={props.to}
        link={true}
        onClick={() => props.onClick(props.name)}
    />
);