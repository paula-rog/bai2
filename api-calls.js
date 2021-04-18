const addGym = (newGym, mockAddNewGym) => {
    fetch("https://my.api.mockaroo.com/gyms?key=77a9da90", {
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
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=77a9da90`, {
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
    fetch(`https://my.api.mockaroo.com/gyms/${id}?key=77a9da90`, {
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
