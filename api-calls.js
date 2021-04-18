const addGym = (newGym, mockAddNewGym) => {
    //77a9da90
    fetch("https://my.api.mockaroo.com/gyms?key=f85ffbc0", {
        body: JSON.stringify(newGym),
    })
        .then((response) => {
            if (response.ok) {
                // Mock add:
                mockAddNewGym(newGym);
            } else {
                throw response.statusText;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const deleteGym = (id, mockDelete) => {
    //77a9da90
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=f85ffbc0`, {
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
    //77a9da90
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=f85ffbc0`, {
        method: "PUT",
        body: JSON.stringify(newGym),
    })
        .then((response) => {
            if (response.ok) {
                // Mock edit:
                mockEditGym(newGym);
            } else {
                throw response.statusText;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
