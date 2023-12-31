// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
   const response=await fetch('http://localhost:8080/products')
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchProductId(id) {
  return new Promise(async (resolve) =>{
   const response=await fetch('http://localhost:8080/products/'+id)
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchProductsByFilters(filter,sort,pagination) {
//filter={"category":"smartphones"}
let queryString='';
for(let key in filter){
  const categoryValues=filter[key];
  if(categoryValues.length>0){
    const lastCategoryValue=categoryValues[categoryValues.length-1];
    queryString +=`${key}=${lastCategoryValue}&`
  }
 
}
for (let key in sort){
  queryString+=`${key}=${sort[key]}&`
}
for (let key in pagination){
  queryString+=`${key}=${pagination[key]}&`
}
  return new Promise(async (resolve) =>{
   const response=await fetch('http://localhost:8080/products?'+queryString)
   const data= await response.json()
   const totalItem= await response.headers.get('X-total-Count')
   resolve({data:{products:data,totalItem:+totalItem}})
}
  );
}
export function fetchAllCategories() {
  return new Promise(async (resolve) =>{
   const response=await fetch('http://localhost:8080/categories')
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchAllBrands() {
  return new Promise(async (resolve) =>{
   const response=await fetch('http://localhost:8080/brands')
   const data= await response.json()
   resolve({data})
}
  );
}