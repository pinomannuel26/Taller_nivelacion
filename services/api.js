import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
/*Insertar productos metodo post */
export async function createProduct(product){
    try{
        const response = await axios.post('https://tallerminback.onrender.com/products/', product);
        console.log('response create', response.data);
        return response
    }catch (error){
        console.log('Error creating product: ',error);
        alert('Hubo un error al crear el producto, Por favor, inténtalo de nuevo.')
    }
}

/**Listar productos,  metodo get */
export async function fetchProducts(){
    try{
        const response = await axios.get('https://tallerminback.onrender.com/products/');
        return response.data;
        
        
    }catch(error){
        console.log('Error fetching products: ',error);
        return[];
    }
}
/*ELIMINAR */
export async function deleteProduct(productId)
{
    try{
        await axios.delete(`https://tallerminback.onrender.com/products/${productId}`);
        return true;
    }catch (error){
        console.error(`Error deleting product: `,error);
        alert('Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.')
    }
}

/**ACTUALIZAR */
export async function saveProduct (product)
{
    try{
        const response = await axios.put(`https://tallerminback.onrender.com/products/${product.id}`,{
            ...product
        });
        return response;
    
    }catch (error){
        console.error(`Error updating product: `,error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.')
    }
}