import React from 'react';
import { Link } from "react-router-dom";

import icon from '../../../public/favicon'

export default function HomePage() {
    return (
        <>
        <div>

        <img src={icon} alt="warbler visiting a red currant flower" />
        <h1>Welcome to the SaP Project</h1>
        <h2>Songbirds as Pollinators</h2>
        <p>Every spring, millions of songbirds leave their wintering grounds and migrate north to their breeding range. These birds provide a variety of benefits to nature and people such as pest control and seed dispersal, as well as aesthetic beauty and recreational opportunities. Another service that these birds may provide is pollination: however, the nature and frequency of pollination by North American migrants has not been systematically investigated, until now. Though many songbirds may forage in flowers and provide pollination services as a result; tanagers (genus Piranga), new world orioles (genus Icterus), and wood-warblers (family Parulidae) have frequently been observed and described in literature foraging in flowers and hummingbird feeders across North America.</p>
        <p>By collaborating with bird banders across western North America and nature enthusiasts across the globe, we will work to understand the role of flower foraging songbirds in pollination systems.</p>
        <span style={{margin: 1}}>
            <Link to='/About'>Learn More</Link>
            <Link to='/Goals'>Goals & Motivation</Link>
            <Link to='/getInvolved'>Get Involved</Link>
        </span>
        <Link to='/protocol'>Pollen Getting Protocol</Link>
        </div>
        </>
    );
}