export const UPDATEPRODUCT = 'UPDATEPRODUCT';
type props = {
    id: string;
}
export const updateProduct = (id: props)=>{
    return { type: UPDATEPRODUCT, pid: id }
}