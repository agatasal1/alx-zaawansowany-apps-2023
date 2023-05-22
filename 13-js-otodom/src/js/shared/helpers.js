const getIdFromSearchParams = (searchParams) => {
    const params = new URLSearchParams(searchParams)
    return params.get('id');
}


export default getIdFromSearchParams;