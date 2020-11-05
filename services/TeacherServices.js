const API_URL = "/api";
export async function saveInfo(data) {

    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({teacherInfo: data})
    })
    return await response.json();
}

export async function updateInfo(data) {
    const response = await fetch(`${API_URL}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({teacherUpdateInfo: data})
    });
    return await response.json();
}

export async function DeleteInfo(data) {
    const response = await fetch(`${API_URL}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({deleteInfo: data})
    });
    return await response.json();
}
export async function getInfo() {
    const response = await fetch(`${API_URL}`, {method: 'GET'})
    return await response.json();
}