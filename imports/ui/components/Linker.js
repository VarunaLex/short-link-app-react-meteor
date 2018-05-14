import React from "react";
import { Links } from "./../../api/links";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";

export const Linker = () => {
    return (<div>
        <PrivateHeader title="Links Home" />
        <LinksList />
        <AddLink />
    </div>)
}