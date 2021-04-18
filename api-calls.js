const addGym = (newGym, mockAddNewGym) => {
    fetch("https://my.api.mockaroo.com/gyms?key=7d3e0910", {
        method: "POST",
        body: newGym,
    })
        .then((response) => {
            // if (response.ok) {
                // Mock add:
                mockAddNewGym(newGym);
            // } else {
            //     throw response.statusText;
            // }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const deleteGym = (id, mockDelete) => {
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=7d3e0910`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                // Mock delete:
                mockDelete()
            } else {
                throw response.statusText;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
const editGym = (id, newGym, mockEditGym) => {
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=7d3e0910`, {
        method: "PUT",
        body: newGym,
    })
        .then((response) => {
            // if (response.ok) {
                // Mock edit:
                mockEditGym(newGym);
            // } else {
            //     throw response.statusText;
            // }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
