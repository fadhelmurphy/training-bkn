import React from 'react'
import chartdata from '../data/data-chart.json'
import {Doughnut} from 'react-chartjs-2';
import Layout from "../layouts/Layout";

export default function ChartPage(){
    return(
        <>
        <Layout>
        <Doughnut
          data={chartdata}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'center'
            }
          }}
        />
        </Layout>
        </>
    )
}