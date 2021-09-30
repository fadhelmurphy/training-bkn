import React from "react";
import {Nav } from "react-bootstrap";
import Link from 'next/link'
import { useRouter } from 'next/router';

import sidebar from '../data/sidebar.json'

export default function Sidebar(){
    const { pathname } = useRouter();
    const data = [
        {
            url:'/',
            text:'Home'
        },
        {
            url:'/registration',
            text:'Registration'
        },
        {
            url:'/chart',
            text:'Chart'
        }
    ]
    return(
<Nav className="flex-column">
    {data.map(el=>
        
        <Link href={el.url}>
            <a className={"text-dark nav-link"+ (pathname==el.url?' active':'')} >
            {el.text}
            </a>
        </Link>
    )}
</Nav>
    )
}