import React, {Component} from "react";
import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";

export class Linker extends Component {

    render() {
        return (<div>
            <PrivateHeader title="Links Home" />
            <LinksList />
            <AddLink />
        </div>)
    }
}