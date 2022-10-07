import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async()=>{
    // get products
    const productsData= await fetch('products.json');
    const products =await productsData.json();
    // get cart 
    const savedCart=getStoredCart();
    const initialCart=[];
    
    for(const id in savedCart){
        const addedProduct= products.find(product =>product.id===id );
        if(addedProduct){
            const quantity=savedCart[id];
            // ai dke amra product er ashol quantity er man upor er quantity diye set korbo jeno mot koibar click koche buji
            addedProduct.quantity=quantity;
            initialCart.push(addedProduct);

        }
    }
    return {products: products, initialCart: initialCart};
}