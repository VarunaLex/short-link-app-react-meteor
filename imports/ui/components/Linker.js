import React from "react";
import { Links } from "./../../api/links";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from './LinksListFilters';

export const Linker = () => {
    return (<div>
        <PrivateHeader title="Links Home" />
        <LinksListFilters />
        <LinksList />
        <AddLink />
    </div>)
}