import React from "react";
import {Nav } from "react-bootstrap";
import Link from 'next/link'
import { useRouter } from 'next/router';

import sidebar from '../data/sidebar.json'

export default function Sidebar(){
    const { pathname } = useRouter();
    return(
<Nav className="flex-column">
    {sidebar.map(el=>
        
        <Link href={el.url}>
            <a className={"text-dark nav-link"+ (pathname==el.url?' active':'')} >
            {el.text}
            </a>
        </Link>
    )}
</Nav>
    )
}