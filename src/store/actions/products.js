const UPDATEPRODUCT = 'UPDATEPRODUCT';

export const updateProduct = (id)=>{
    return { type: UPDATEPRODUCT, pid: id }
}