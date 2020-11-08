export async function dummyInvocation(url, data) {
    console.log("Received url is: ", url)
    console.log("Received data is: ", data)
    return new Promise((resolve)=>{
        resolve({"message": "API invocation is success"})
    })
}

export async function saveInfo(url, data) {
    const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({teacherInfo: data})
    })
    return await response.json();
}

export async function updateInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({teacherUpdateInfo: data})
    });
    return await response.json();
}

export async function DeleteInfo(url, data) {
    const response = await fetch(`${url}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({deleteInfo: data})
    });a
    return await response.json();
}
export async function getInfo(url) {
    const response = await fetch(`${url}`, {method: 'GET'})
    return await response.json();
}