import axios from 'axios';

//const DELIVERY_API_BASE_URL = "http://localhost:8080/api";

   export const getDeliveryEntity= async (id) => {
    id = id || '';
        return axios.get(`http://localhost:8080/api/getDeliveryEntities`);
    }
    // export const getDeliveryEntityById = async (id) => {
    //     return axios.get(`http://localhost:8080/api/getDeliveryEntityById/${id}`,id);
    // }
    
    export const addDeliveryEntity= async (deliveryEntity) =>{
        return axios.post(`http://localhost:8080/api/addDeliveryEntity`, deliveryEntity);
    }

    export const updateDeliveryEntity= async ( deliveryEntity) => {
        return axios.put(`http://localhost:8080/api/updateDeliveryEntity`,deliveryEntity);
    }

    export const deleteDeliveryEntityById = async (id) => {
        return axios.delete(`http://localhost:8080/api/deleteDeliveryEntityById/${id}`);
    }

//....................................Vehicle .............................................

export const getVehicleEntity = async  => {
    //id = id || '';
    return  axios.get(`http://localhost:8080/api/getVehicleEntity`);
    //return await axios.get(`${vehicleUrl}/getVehicleyEntityById/${id}`);
}


 export const addVehicleEntity = async (vehicle) =>{
    return axios.post(`http://localhost:8080/api/addVehicleEntity`, vehicle);
}
 
 export const deleteVehicleEntityById = async (id) => {
    return axios.delete(`http://localhost:8080/api/deleteVehicleEntityById/${id}`);
}

export const updateVehicleEntity = async (vehicle) => {
     return axios.put(`http://localhost:8080/api/updateVehicleEntity`, vehicle)
} 

//....................FlatModule..........................................

export const getFlatRentEntity = async (id) => {
    id = id || '';
    return  axios.get(`http://localhost:8080/api/getFlatRentEntities`);
}

export const getFlatRentEntityById = async (id) => {
    return axios.get(`http://localhost:8080/api/getFlatRentEntityById/${id}`,id);
}

export const addFlatRentEntity = async (flatrentEntity) => {
    return  axios.post(`http://localhost:8080/api/addFlatRentEntity`, flatrentEntity);
}

export const deleteFlatRentEntityById = async (id) => {
    return  axios.delete(`http://localhost:8080/api/deleteFlatRentEntityById/${id}`);
}

export const updateFlatRentEntity = async (flatrentEntity) => {
    return  axios.put(`http://localhost:8080/api/updateFlatRentEntity`,flatrentEntity);
} 

//....................Visitor.................................
const visitorUrl = 'http://localhost:8080/api';


export const getVisitorEntity = async (id) => {
    id = id || '';
    return axios.get(`${visitorUrl}/getVisitorEntities`);
}

export const addVisitorEntity = async (visitor) => 
{
    return axios.post(`${visitorUrl}/addVisitorEntity`,visitor);
}

 export const deleteVisitorEntityById = async (id) => {
    return  axios.delete(`${visitorUrl}/deleteVisitorEntityById/${id}`);
}

// export const updateVisitorEntity = async (visitor) => {
//     return axios.put(`${visitorUrl}/updateVisitorEntity`, visitor)
// } 
export const updateVisitorEntity = async (visitor) => {

    return axios.put(`http://localhost:8080/api/updateVisitorEntity`, visitor)

}

//..................................User......................................................
export const getUser = async (id) => {
    id = id || '';
    return  axios.get(`http://localhost:8080/api/getUsers`);
}

export const addUser = async (user) => 
{
    return axios.post(`http://localhost:8080/api/addUser`,user);
}

 export const deleteUserById = async (id) => {
    return  axios.delete(`http://localhost:8080/api/deleteUserById/${id}`);
}

export const updateUser = async ( user) => {
    return axios.put(`http://localhost:8080/api/updateUser`, user)
}