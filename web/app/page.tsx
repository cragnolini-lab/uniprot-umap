'use client'

import { useState, useEffect } from 'react';
import Categories from "@/components/Categories";
import Plot from "@/components/Plot";

const PLOTDATA_URL = "http://localhost:3000"

export default function Home() {

    const [plotData, setPlotData] = useState<any>()

    useEffect(() => {
        fetch(`${PLOTDATA_URL}/latest.json`)
            .then((res) => res.json())
            .then((data) => setPlotData(data));
    }, [])


    if (!plotData) return <></>

    return (
        <main className="flex flex-row">
            <Categories categories={plotData.keyword_mapping}/>
            <Plot data={plotData}/>
        </main>
    );
}
