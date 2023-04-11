const getData = async ()=>{
    const res = await fetch('/job.json')
    const data = await res.json()
    return data
}

export default getData;