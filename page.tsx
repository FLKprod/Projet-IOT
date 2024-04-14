"use client"

import { useEffect, useState } from "react"

const Home = () => {

  const [userInfo, setUserInfo] = useState([])
  const [vulnerabilities, setVulnerabilities] = useState(null);;

  const [cveInfoR, setCveInfo] = useState([])

  useEffect(()=>{
    const getData = async () => {
      //const query = await fetch('https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Microsoft&pubStartDate=2021-08-04T00:00:00.000&pubEndDate=2021-10-09T00:00:00.000')
      const keywordSearch = "Microsoft"
      const pubStartDate = "2021-08-04T00:00:00.000"
      const pubEndDate = "2021-08-22T00:00:00.000"
      const query = await fetch('https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch='+keywordSearch+'&pubStartDate='+pubStartDate+'&pubEndDate='+pubEndDate)
      const response = await query.json(); 

      console.log('Response from API',response)
      setUserInfo(response)

      /* MAin */

      const cveInfo: {
        id: string;
        description: string;
        name: string;
        baseSeverity: string;
        date: string;
        CWE_name: string;
        link: URL;
      }[] = [];

      // Iterate through the CVE objects
      for (const cve of response.vulnerabilities) {
        const id = cve.cve.id; // Get the ID
        const date = cve.cve.published;
        const description = cve.cve.descriptions[0].value; // Assuming you want the first description
        const name = id; // You can adjust this based on your naming preference
        const baseSeverity = cve.cve.metrics.cvssMetricV2[0].baseSeverity;
        const CWE_name = cve.cve.weaknesses[0].description[0].value;
        const link = new URL("https://cve.mitre.org/cgi-bin/cvename.cgi?name=" + id )
        cveInfo.push({ id, description, name, baseSeverity, date, CWE_name, link });
      }

      setCveInfo(cveInfo);

      // To Get the Name it's in the weakness, description, value 

      /*Trying to get vulnerabilities */

      // cveInfo will now contain an array of objects with id, description, and name properties
      console.log("\n CVEINFO \n",cveInfo);
    }
    getData(); 
  },[]);


  return (
    <>
      <div>page test</div>
      <h1>Liste des différentes failles de sécurité</h1>

      {/* <p>
        {userInfo.format}
      </p> */}
      <ul>
        {cveInfoR.map((cve, index) => (
              <li key={index}>
                <a href={cve.link}><h3>CVE ID: {cve.id}</h3></a>
                <p>Description: {cve.description}</p>
                <p>ID: {cve.name}</p>
                <p>Severity: {cve.baseSeverity}</p>
                <p>Date: {cve.date}</p>
                <p>NAME: {cve.CWE_name}</p>
              </li>
            ))}
      </ul>
    </>
  )
}

export default Home