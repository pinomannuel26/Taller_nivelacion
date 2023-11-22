import { createProduct, deleteProduct, fetchProducts, saveProduct } from "./services/api.js";

/**
 * 2.	Escribir una función que utilice una promesa para simular una operación asincrónica, como, 
 * por ejemplo, una solicitud de datos. Luego, mostrar los resultados de la promesa en una sección 
 * en la página web.
 * 
    3.	Crear una API falsa con JSON Server y realizar una solicitud GET y POST con Fetch o Axios y 
    mostrar los resultados en una sección de la página web.

 */
    console.log('Ejercicio #2 y #3');

    const productListElement = document.getElementById('product-list');
    const editName = document.getElementById('edit-name');
    const editPrice = document.getElementById('edit-price');
    const editIdinput = document.getElementById('edit-id');
    const editFormElement = document.getElementById('edit-form');
    
    /**windos.funcion, para funciones que se van a activar cuando haya un evento
     * esto hace que no se generen problemas 
     */
    window.createProductForm = async function createProductForm() {
        const createNameInput = document.getElementById('create-name').value;
        const createPriceInput = document.getElementById('create-price').value;
        const product ={
            name: createNameInput,
            price: createPriceInput
        }
    
        await createProduct(product);
        alert('Producto creado exitosamente');
        refreshProducts();
    }
    
    /*Invocar al Listar productos */
    async function refreshProducts(){
        const productsData = await fetchProducts();
        displayProducts (productsData);
    }
    
    /**Listar los productos */
    function displayProducts(productsData){
        //products = productsData;
        const productHTML = productsData.map(product => `
        <li>
            <span> ${product.name}</span>
            <span>${product.price}</span>
            <button onclick="editProduct(${product.id})">Editar</button>
            <button onclick="deleteProductF(${product.id})">Eliminar</button>
        </li>
        `).join('');
        productListElement.innerHTML= `<ul>${productHTML}</ul>`
    }
    
    /**Eliminar */
    window.deleteProductF = async function deleteProductF(id)
    {
        deleteProduct(id);
    }
    
    /**Editar */
    window.editProduct = async function editProduct(productId)
    {
        const products = await fetchProducts();
        const product = products.find(p=> p.id === productId);
        if(product)
        {
            showEditForm(product);
        }
    }
    
    window.saveProductForm = async function saveProductForm (){
        const product={
            id: editIdinput.value,
            name: editName.value,
            price: editPrice.value
        }
        await saveProduct(product);
        refreshProducts();
        alert('Producto editado exitosamente');
    }
    
    function showEditForm(product){
        editName.value = product.name;
        editPrice.value = product.price;
        editIdinput.value= product.id;
        editFormElement.style.display = 'block';
    }
    
    function hideEditForm(){
        editFormElement.style.display = 'none';
    
    }
    
    window.cancelEdit = function cancelEdit(){
        hideEditForm();
    }
    
    refreshProducts();